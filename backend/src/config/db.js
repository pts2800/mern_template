//imports mongoDB
import mongoose from "mongoose"

//attempts to connect to DB
export const connectDB = async () => {
    //if successfull
    try {
        await mongoose.connect('mongodb://192.168.1.163:27017')
        console.log("mongodb connected successfully")
    //if not successful
    } catch (error) {
        console.error("eroor connecting to mongodb", error);
        process.exit(1) //exit with failure
    }
}
