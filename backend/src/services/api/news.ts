import axios from 'axios';
import { newsApiKey } from '../../config';

type NewsApiArticle = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type ResponseArticle = {
  sourceName: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

const fetchArticles = async (): Promise<ResponseArticle[]> => {
  const uri = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${newsApiKey}`;

  const response = await axios.get(uri);
  const { articles } = response.data;

  const responseArticles: ResponseArticle[] = articles
    .filter((article: NewsApiArticle) => {
      return (
        article.source.name !== null &&
        article.title !== null &&
        article.urlToImage !== null &&
        article.publishedAt !== null &&
        article.content !== null
      );
    })
    .map((article: NewsApiArticle) => {
      const responseArticle = {
        sourceName: article.source.name,
        title: article.title,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      };

      return responseArticle;
    });

  return responseArticles;
};

export default { fetchArticles };
