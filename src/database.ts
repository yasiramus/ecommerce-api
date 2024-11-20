import mongoose from "mongoose";

const Url = process.env.MDB_URI as string;

const dbConnection = () => {
    mongoose
        .connect(Url)
        .then((success) => {
            if (success) console.log("You successfully connected to MongoDB!");
        })
        .catch((error) => console.log("error: ", error.message));
};

export { dbConnection };