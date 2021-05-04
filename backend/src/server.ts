import app from './app';
import { port } from './config';
import './database';

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
