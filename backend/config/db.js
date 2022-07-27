import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect("mongodb+srv://gwolf97:22134www@proshopcluster.zksb44i.mongodb.net/landingPageDB?retryWrites=true&w=majority")

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error:${error}`)
        process.exit(1)
    }
}

export default connectDB