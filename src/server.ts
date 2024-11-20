import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import { dbConnection } from "./database";

const app = express();

const PORT = process.env.PORT || "5000";

/**middlewares */
// cors configuration
app.use(
    cors({
        origin: "https://localhost:3000",
        methods: "*",
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
        optionsSuccessStatus: 204,
    })
);

app.use(cookieParser()); //global usage

app.use(express.json());

// server listening on Port 5000
app.listen(PORT, () => {
    dbConnection(), console.log(`Listening on port: ${PORT}`);
});
