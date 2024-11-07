import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>  {
    connectToMongoDb();
    console.log(`server is running on PORT ${PORT}`);
});
