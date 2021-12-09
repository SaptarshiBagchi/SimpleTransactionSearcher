import mongoose from 'mongoose';
const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/usersdb'
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback() {
    console.log('mongoose connected');
  });
}
export default connectDB