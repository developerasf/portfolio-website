import { Pool, PoolConfig } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 1,
} as PoolConfig);

console.log('Database pool created');
console.log('DATABASE_URL set:', !!process.env.DATABASE_URL);

pool.on('error', (err) => {
  console.error('Pool error:', err.message);
});

pool.on('connect', () => {
  console.log('✅ Connected to database!');
});

export const query = async (text: string, params?: unknown[]) => {
  console.log('Attempting query:', text.substring(0, 30));
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    console.log('✅ Query success, rows:', res.rowCount);
    return res;
  } finally {
    client.release();
  }
};

export const supabase = null;
export default pool;