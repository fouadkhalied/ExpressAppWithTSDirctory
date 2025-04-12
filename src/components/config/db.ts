// src/db.ts
import { Pool } from 'pg';
import { DATABASE_CONNECTION_STRING } from '.';

const globalForPool = globalThis as unknown as {
  pgPool: Pool | undefined;
};

export const pool =
  globalForPool.pgPool ||
  new Pool({
    connectionString: DATABASE_CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false, // required for Supabase/Neon
    },
  });
// Optional test connection

