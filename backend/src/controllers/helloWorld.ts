import { Request, Response } from 'express';

const getHello = (_: Request, res: Response): void => {
  res.send('Hello World');
};

export default { getHello };
