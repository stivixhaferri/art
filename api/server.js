import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './config/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

await connect();




const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8001;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})

