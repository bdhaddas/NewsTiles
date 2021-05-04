import express, { Router } from 'express';
import newsController from '../controllers/news';

const router: Router = express.Router();

// @route   GET /api/news
// @desc    Get News articles form NewsApi
// @access  Public
router.get('/', newsController.getNews);

export default router;
