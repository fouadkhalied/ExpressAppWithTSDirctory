// src/db.ts
import { Pool } from 'pg';
import { DATABASE_CONNECTION_STRING } from '.';

export const pool = new Pool({
  connectionString : DATABASE_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false, // required for Supabase/Neon in many cases
  },
});

// Optional test connection

export const connect = async() => {
    pool.connect()
  .then(() => console.log('Connected to PostgreSQL 🎉'))
  .catch((err : any) => console.error('PostgreSQL connection error', err));
} 

