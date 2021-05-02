import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { port, nodeEnv } from './config';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan(nodeEnv));

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.info('server is listening at http://localhost:3000');
});
