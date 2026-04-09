import { Router } from 'express';
import { query } from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await query('SELECT * FROM projects ORDER BY id');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch project' });
  }
});

export default router;