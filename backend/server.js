import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import asyncHandler from "express-async-handler"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

//routes

app.post("/signup", asyncHandler((req, res) => {
  res.json({message:"hello"})
}))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))