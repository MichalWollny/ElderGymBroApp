import mongoose from 'mongoose';

const dbConnection = async () => {
  //   console.log(process.env.mongoDBURI);
  try {
    const connection = await mongoose.connect(process.env.mongoDBURI);
    console.log('Connected to MongoDB');
    console.log(connection.connection.db.databaseName);
  } catch (error) {
    console.log('Connection errror:', error.stack);
  }
};
dbConnection();
