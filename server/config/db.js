import mongoose from 'mongoose'

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('Connected'))
        .catch(err => console.error('Connection error:', err));

}

export default connectDB;