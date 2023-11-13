import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./helpers/connectDB.js";
import cors from "cors";
import studentRoute from "../backend/routes/studentRoute.js";

const app = express();

// middleWare

const Cors = app.use(cors());
const bodyparser = app.use(express.json());

// middleWare

const dotenv = configDotenv();
const DbCnnection = connectDB();

app.use("/api/v1/", studentRoute);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome...");
});

const PORT = process.env.PORT;
const MODE = process.env.DEV_MODE;

app.listen(PORT, () => {
  console.log("Server running on", PORT, MODE);
});
