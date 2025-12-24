import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const TagModel = mongoose.model("Tag", tagSchema);