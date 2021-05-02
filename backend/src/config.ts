import dotenv from 'dotenv';

dotenv.config();

export const port = Number(process.env.PORT || 3000);
export const nodeEnv = String(process.env.NODE_ENV || 'common');
export const databaseURI = String(process.env.MONGODB_URI);
