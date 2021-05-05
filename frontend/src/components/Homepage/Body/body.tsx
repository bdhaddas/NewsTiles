import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { uuid } from 'uuidv4';
import NewsTile from '../NewsTile/NewsTile';

type NewsStory = {
  sourceName: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

const Body = () => {
  const [news, setNews] = useState<NewsStory[]>([]);

  useEffect(() => {
    const getNews = async (): Promise<void> => {
      try {
        const response = await axios.get('http://localhost:5000/api/news');
        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, []);
  return (
    <div className='container'>
      {news.map((story) => (
        <NewsTile
          key={uuid()}
          source={story.sourceName}
          title={story.title}
          urlToImage={story.urlToImage}
          publishedAt={story.publishedAt}
        />
      ))}
    </div>
  );
};

export default Body;
