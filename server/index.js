import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentsRoute from './routes/comments.js'


const app = express();
dotenv.config();

//Constants
const PORT = process.env.PORT || 3001; // Переменная окружения PORT
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middleware
app.use(cors());
app.use(fileUpload())
app.use(express.json());
app.use(express.static('uploads'))

//Routes
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute);
app.use('/api/comments', commentsRoute);

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.byl955h.mongodb.net/${DB_NAME}?retryWrites=true&w=majority `
        );
    } catch (error) {
        console.log(error);
    }
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

start();
