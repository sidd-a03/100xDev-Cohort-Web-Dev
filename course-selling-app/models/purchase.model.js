import mongoose from 'mongoose'

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
    }
}, { timestamps: true })

const PurchaseModel = mongoose.model('purchase', purchaseSchema);

export default PurchaseModel;