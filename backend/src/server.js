import express from "express";
import baseRoutes from "../src/routes/baseRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5028

connectDB();

app.use("/api/things", baseRoutes)

//connects on part 5028
app.listen(PORT, ()=>{
    console.log("Server started on PORT:",PORT);
});
