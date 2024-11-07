import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "chat-socket-zustand",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to Mongodb');
    } catch(error) {
        console.log(`Mongoose connection error: ${error.message}`)
    }
}

export default connectToMongoDb;