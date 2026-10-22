import "dotenv/config"; // reads .env into process.env
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRoutes";

const app = express(); // was to start up the server in express

const PORT = process.env.PORT || 6741;

// CORS: only the Client url address my call this API
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173/" }));

// convert every request to json (javascript format)
app.use(express.json());

// Every Endpoint must start with /api/tasks is handled by task router
// .use is an inbuilt middleware (middle man) that can be used to convert, check and validate requests
app.use("/api/tasks", taskRouter);

const startServer = async () => {
  await mongoose.connect(process.env.MONGO_URL as string);

  console.log("Database connected successfully");

  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();

// shofidiyamubarak_db_user
// C57SfwHKHluOExaO
// mongodb+srv://shofidiyamubarak_db_user:C57SfwHKHluOExaO@cluster0.9gw2evg.mongodb.net/

// cors: cross origin resources sharing
