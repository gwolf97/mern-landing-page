import express from "express"
import dotenv from "dotenv"
import asyncHandler from "express-async-handler"

const app = express()

app.use(express.json())

//routes

app.post("/signup", asyncHandler((req, res) => {
  res.json({message:"hello"})
}))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))