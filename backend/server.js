import express from "express";
import baseRoutes from "../src/routes/baseRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

connectDB();

app.use("/api/things", baseRoutes)

//connects on part 5028
app.listen(5028, ()=>{
    console.log("Server started on PORT: 5028:");
});
