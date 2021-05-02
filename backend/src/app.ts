import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { nodeEnv } from './config';
import helloWorldRouter from './routes/helloWorld';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan(nodeEnv));
app.use('/', helloWorldRouter);

export default app;
