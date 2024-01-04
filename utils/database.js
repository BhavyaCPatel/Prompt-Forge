import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if (isConnected){
        console.log('DB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"prompts",
        })

        console.log("MONGODB Connected")
        isConnected = true;

    } catch (error) {
        console.log(error);
    }
}