import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['image', 'video', 'article', 'audio'],
        required: true,
    },
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tags',
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

const ContentModel = mongoose.model("Content", contentSchema);