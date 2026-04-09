import { Router } from 'express';
import { query } from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await query('SELECT * FROM skills ORDER BY category, display_order');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch skills' });
  }
});

export default router;