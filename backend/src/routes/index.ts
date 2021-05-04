import express, { Router } from 'express';
import newsRouter from './news';

const router: Router = express.Router();

router.use('/news/api', newsRouter);

export default router;
