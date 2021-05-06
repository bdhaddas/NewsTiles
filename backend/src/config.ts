import dotenv from 'dotenv';

dotenv.config();

export const port = Number(process.env.PORT || 5000);
export const nodeEnv = String(process.env.NODE_ENV || 'common');
export const database = String(process.env.MONGODB_URI);
export const newsApiKey = String(process.env.NEWSAPI_KEY);
