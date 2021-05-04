import mongoose from 'mongoose';
import { database } from './config';

mongoose.connect(database, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('error', (err) => {
  console.log(`Database Connection Error -> ${err.message}`);
});
