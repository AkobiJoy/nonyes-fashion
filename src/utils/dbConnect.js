import mongoose from "mongoose";

export default async function dbConnect() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        if(connect){
            console.log("db connected")
            return connect
        }
    } 
    catch (error) {
      console.log(error.message)  
    }
}