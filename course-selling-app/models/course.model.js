import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true, trim: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { timestamps: true })

const courseModel = mongoose.model('course', courseSchema)

export default courseModel;