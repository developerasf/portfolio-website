import { Pool } from 'pg';
import { createClient } from '@supabase/supabase-js';

const getConnectionString = (): string => {
  const connString = process.env.DATABASE_URL;
  const nodeEnv = process.env.NODE_ENV;
  
  console.log('NODE_ENV:', nodeEnv);
  console.log('DATABASE_URL set:', !!connString);
  
  if (!connString) {
    console.error('DATABASE_URL is not set!');
    return '';
  }
  
  try {
    const url = new URL(connString);
    console.log('Parsed host:', url.host);
    console.log('Parsed protocol:', url.protocol);
    
    // Don't encode password - pg handles it
    return connString;
  } catch (e) {
    console.error('Failed to parse DATABASE_URL:', e);
  }
  return connString;
};

const pool = new Pool({
  connectionString: getConnectionString(),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

console.log('Database pool created with NODE_ENV:', process.env.NODE_ENV);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err.message);
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Connected to database successfully');
});

export const query = async (text: string, params?: unknown[]) => {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text: text.substring(0, 50), duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

export const getClient = () => pool;

export const supabaseUrl = process.env.SUPABASE_URL || '';
export const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export default pool;