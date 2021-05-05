import express, { Router } from 'express';
import newsRouter from './news';
import helloWorldRouter from './helloWorld';

const router: Router = express.Router();

router.use('/', helloWorldRouter);
router.use('/api/news', newsRouter);

export default router;
