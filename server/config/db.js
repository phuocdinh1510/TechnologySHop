import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mydb")
    } catch (error) {
        console.log(error);
        
    }
}