import app from './app';
import { port } from './config';

app.listen(port, () => {
  console.log('server is listening at http://localhost:3000');
});
