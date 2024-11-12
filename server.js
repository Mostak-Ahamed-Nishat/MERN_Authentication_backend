import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

// user router
app.use("/api/users", userRoutes);

//Error Handler

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 8000, () => {
  console.log(
    "Project is running on port: " + `http://localhost:${process.env.PORT}`
  );
});
