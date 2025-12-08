import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
}, { timestamps: true })

const AdminModel = mongoose.model('admins', adminSchema);

export default AdminModel;