import bcrypt from 'bcrypt';
import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "../config/env.js";

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

export const signInController = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.status(401).json({
            message: 'User not found!',
        })
    }

    const matchedPassword = bcrypt.compare(password, user.password);

    if (matchedPassword) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        console.log(token);
        return res.status(200).json({
            message: 'User successfully logged in',
            token
        })
    } else {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
}