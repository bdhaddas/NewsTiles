import app from './app';
import connect from './database';
import { port, databaseURI } from './config';

connect(databaseURI);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
