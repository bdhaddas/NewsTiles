import express, { Router } from 'express';
import helloWorldController from '../controllers/helloWorld';

const router: Router = express.Router();

router.get('/', helloWorldController.getHello);

export default router;
