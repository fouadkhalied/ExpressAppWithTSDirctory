import dotenv from 'dotenv';

dotenv.config()

export const DATABASE_CONNECTION_STRING : string | undefined = process.env.DATABASE_CONNECTION_STRING
export const PORT = process.env.PORT || 3000