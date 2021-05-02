import mongoose from 'mongoose';

export default (database: string): void => {
  const connect = async (): Promise<void> => {
    try {
      await mongoose.connect(database, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });

      console.log(`Succesfully connected to -> ${database}`);
    } catch (error) {
      console.log(`Error connecting to database -> ${error}`);
    }
  };
  connect();

  mongoose.connection.on('error', (err) => {
    console.log(`Database Connection Error -> ${err.message}`);
  });
};
