import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://192.168.1.163:27017')
        console.log("mongodb connected successfully")
    } catch (error) {
        console.error("eroor connecting to mongodb", error);
        process.exit(1) //exit with failure
    }
}
