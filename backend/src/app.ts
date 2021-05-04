import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { nodeEnv } from './config';
import routes from './routes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan(nodeEnv));
app.use(routes);

export default app;
