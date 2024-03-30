import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});



app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
