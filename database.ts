require('dotenv').config();


import mongoose from "mongoose";
const Url = process.env.DB_URL;

const number = process.env.PORT

console.log('url', number)
const dbConnection = () => {


    mongoose.connect(Url as string).then(success =>
        console.log('succ:', success)
    ).then(error => console.log(error))

}

export { dbConnection }