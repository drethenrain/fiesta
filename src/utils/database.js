import mongoose from 'mongoose';

const connect = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URL);

  mongoose.connection
    .on('connected', () => console.log('mongo connected'))
    .on('reconnected', () => console.log('mongo reconnected'))
    .on('error', (err) => console.log(err));
};

export { connect };
