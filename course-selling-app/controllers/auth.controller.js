import bcrypt from 'bcrypt';
import UserModel from "../models/user.model.js";

export const signUpController = async (req, res) => {
    const { username, password, name } = req.body;

    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
        return res.status(409).json({
            message: "User already exist",
        })
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        await UserModel.create({
            username,
            password: hashedPassword,
            name
        })
    } catch (e) {
        return res.status(500).json({
            message: 'Internal error creating user',
        })
    }
}