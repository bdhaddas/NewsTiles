import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsTiles = (): JSX.Element => {
  const [helloWorld, setHelloWorld] = useState();

  useEffect(() => {
    const getHello = async (): Promise<void> => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setHelloWorld(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getHello();
  });

  return (
    <div>
      <h1>{helloWorld}</h1>
    </div>
  );
};

export default NewsTiles;
