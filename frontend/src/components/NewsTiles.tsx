import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './Homepage/homepage';

const NewsTiles = (): JSX.Element => {
  // const [helloWorld, setHelloWorld] = useState();

  // useEffect(() => {
  //   const getHello = async (): Promise<void> => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/');
  //       setHelloWorld(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getHello();
  // });

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default NewsTiles;
