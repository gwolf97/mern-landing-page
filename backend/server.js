import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import connectDB from "./config/db.js"
import asyncHandler from "express-async-handler"
import LandingPageUser from "./models/userModel.js"

dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename)

console.log(__dirname)

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

//routes

app.get("/home", asyncHandler(async (req,res) =>{
    const members = (await LandingPageUser.find()).length
    res.json({members: members})
}))

app.get("/home/:id", asyncHandler(async (req,res) =>{
    const user = await LandingPageUser.findById(req.params.id)
    if(user){
        res.json({
            name: user.name,
        })
     }else{
        res.status(404)
        throw new Error("User not found")
     }
}))

app.post("/signup", asyncHandler(async (req, res) => {
    const {name, email} = req.body

    const userExists = await LandingPageUser.findOne({email: email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await LandingPageUser.create({
        name,
        email
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
}))


app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))