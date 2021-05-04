import { Request, Response } from 'express';
import newsServices from '../services/api/news';

const getNews = async (_: Request, res: Response): Promise<void> => {
  try {
    const articles = await newsServices.fetchArticles();
    console.log(articles);
    res.status(200).json(articles);
  } catch (err) {
    console.log(err);
  }
};
export default { getNews };

// backup api key
// bc8a19d6a7f24796947aa41479d89abb
