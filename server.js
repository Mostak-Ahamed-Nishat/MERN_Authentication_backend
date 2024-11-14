import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// user router
app.use("/api/users", userRoutes);

//Connect DB
connectDB();
//Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 8000, () => {
  console.log(
    "Project is running on port: " + `http://localhost:${process.env.PORT}`
  );
});
