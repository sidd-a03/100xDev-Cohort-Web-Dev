import mongoose from "mongoose";
import {DB_URI} from "../config/env";

if (!DB_URI) throw new Error("MongoDB URI is missing");

const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(DB_URI!);
        console.log("Successfully connected to MongoDB Database");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectToDatabase;
