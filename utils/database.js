import mongoose from "mongoose";
let isConnected = false;
const uri = process.env.MONGODB_URI;
export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if (isConnected){
        console.log('DB already connected');
        return;
    }

        try {
        await mongoose.connect(uri, {
            dbName: "prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MONGODB Connected")
        isConnected = true;

    } catch (error) {
        console.log(error);
    }
}
