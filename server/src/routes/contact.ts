import { Router } from 'express';
import { query } from '../db';
import { sendContactEmail } from '../services/email';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    const result = await query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, subject || null, message]
    );

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      console.log('SMTP credentials found, attempting to send email...');
      sendContactEmail(name, email, message, subject)
        .then(() => console.log('Email sent successfully'))
        .catch((err) => console.error('Email sending failed:', err.message));
    } else {
      console.log('SMTP credentials not configured - skipping email');
    }
    
    res.status(201).json({ 
      success: true, 
      message: 'Message received!',
      data: result.rows[0] 
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, message: 'Failed to save message' });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await query('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
});

export default router;