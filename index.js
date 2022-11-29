import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true, limit: "30mb"}));
app.use(bodyParser.json({extended: true, limit: "30mb"}));
app.use(cors());

app.use("/products", router);

app.get("/", (req, res) => {
   res.send("<h1>Welcome to the E-commerce Shopping Cart</h1>");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
   .catch((err) => console.log(err));
