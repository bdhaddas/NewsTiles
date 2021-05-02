import express, { Router } from 'express';
import helloWorldController from '../controllers/helloWorld';

const router: Router = express.Router();

// @route   GET /
// @desc    Get 'Hello World'
// @access  Public
router.get('/', helloWorldController.getHello);

export default router;
