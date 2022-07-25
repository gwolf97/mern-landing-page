import mongoose from "mongoose";

const landingPageUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
})

const LandingPageUser = mongoose.model("LandingPageUser", landingPageUserSchema)

export default LandingPageUser