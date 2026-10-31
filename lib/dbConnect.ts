import mongoose from "mongoose"

async function dbConnect(): Promise<void> {

    if (mongoose.connection.readyState === 1) {
        console.log("Already connected")
        return;
        
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL as string)

        console.log("database connected successfully")
    }
    catch(error){
        console.error("Database connection failed", error)
        throw error

    }

}

export default dbConnect
