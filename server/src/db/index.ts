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
    console.log('Protocol:', url.protocol);
    return connString;
  } catch (e) {
    console.error('Failed to parse DATABASE_URL:', e);
  }
  return connString;
};

const pool = new Pool({
  connectionString: getConnectionString(),
  // Force SSL for Supabase (required)
  ssl: {
    rejectUnauthorized: false,
    // Try both TLS versions
    minVersion: 'TLSv1.2',
  },
  // Connection timeout
  connectionTimeoutMillis: 10000,
});

console.log('Database pool created');

pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err.message);
});

pool.on('connect', () => {
  console.log('✅ Connected to database successfully');
});

export const query = async (text: string, params?: unknown[]) => {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Query executed', { text: text.substring(0, 30), duration, rows: res.rowCount });
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