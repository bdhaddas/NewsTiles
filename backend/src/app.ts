import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { nodeEnv } from './config';
import newsRouter from './routes/news';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan(nodeEnv));
app.use('/api/news', newsRouter);

export default app;
