import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'


import applicationRoute from './routes/applicationRoute.js'
import authRoute from './routes/authRoute.js'


dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json())

// Simple health check (optional)
app.get('/', (req, res) => {
    res.send('🩺 Server is up!');
});

app.use('/api/applicants', applicationRoute);
app.use('/api/auth', authRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`server started is running on ${PORT}`) }) 