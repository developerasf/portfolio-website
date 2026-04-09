import { Pool } from 'pg';
import { createClient } from '@supabase/supabase-js';

const getConnectionString = (): string => {
  const connString = process.env.DATABASE_URL;
  console.log('DATABASE_URL available:', !!connString);
  
  if (!connString) {
    console.error('DATABASE_URL is not set!');
    return '';
  }
  
  try {
    const url = new URL(connString);
    console.log('Host to connect:', url.host);
    console.log('Port:', url.port);
    return connString;
  } catch (e) {
    console.error('Failed to parse DATABASE_URL:', e);
  }
  return connString;
};

const pool = new Pool({
  connectionString: getConnectionString(),
  ssl: {
    rejectUnauthorized: false,
  },
});

console.log('Database pool created');

pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err.message);
});

pool.on('connect', () => {
  console.log('✅ Connected to database successfully');
});

export const query = async (text: string, params?: unknown[]) => {
  const client = await pool.connect();
  try {
    const start = Date.now();
    const res = await client.query(text, params);
    const duration = Date.now() - start;
    console.log('Query executed', { duration, rows: res.rowCount });
    return res;
  } finally {
    client.release();
  }
};

export const supabase = (() => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (url && key) {
    console.log('Supabase client initialized');
    return createClient(url, key);
  }
  console.log('Supabase credentials not configured');
  return null;
})();

export default pool;