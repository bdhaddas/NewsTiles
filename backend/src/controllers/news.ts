import { Request, Response } from 'express';
import newsServices from '../services/api/news';

const getNews = async (_: Request, res: Response): Promise<void> => {
  try {
    const articles = await newsServices.fetchArticles();
    res.status(200).json(articles);
  } catch (err) {
    console.log(err);
  }
};
export default { getNews };
