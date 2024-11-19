// require('dotenv').config();
// import test from 'dotenv';
// .config()
// console.log(test.config(), 'test')

// import { dbConnection } from './database';
import cors from 'cors';
import express from 'express';
// import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

console.log(process.env.DB_URL, 'oo');


const app = express();

const PORT = process.env.PORT || '5000';
// const Url = 'mongodb+srv://yasirayusif:badaribrahimisamil@cluster0.s6vc7.mongodb.net/'
// console.log('url:', Url);

// database connection
// mongoose.connect(Url)
//     .then(() => console.log('database connected successful'))
//     .catch(error => console.log('error_caught: ', error));

/**middlewares */
// cors configuration 
app.use(
    cors({
        origin: 'https://localhost:3000',
        methods: '*',
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true,
        "optionsSuccessStatus": 204
    })
);

app.use(cookieParser()); //global usage

app.use(express.json());

// server listening on Port 5000
app.listen(PORT, () => { console.log(`server been activated on port: ${PORT}`) })