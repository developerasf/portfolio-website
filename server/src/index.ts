import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import projectRoutes from './routes/projects';
import contactRoutes from './routes/contact';
import skillsRoutes from './routes/skills';
import { query } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://portfolio-api-rs1i.onrender.com', 'https://alaminflow.vercel.app', 'https://alaminflow.com', 'https://portfolio-website-five-sage-34.vercel.app']
    : ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillsRoutes);

app.get('/api/health', async (req, res) => {
  try {
    await query('SELECT 1');
    res.json({ status: 'ok', database: 'connected', timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(503).json({ 
      status: 'error', 
      database: 'disconnected', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString() 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;