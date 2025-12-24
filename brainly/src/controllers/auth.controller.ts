import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";

export const signUpController = async (req:Request , res: Response): Promise<void> => {
    const username: string = req.body.username;
    const password: string = req.body.password;

    const user = await UserModel.findOne({username});

    if(user) {
        res.status(409).json({
            message: "User already exists"
        })
        return;
    }

    const hashedPassword: string = await bcrypt.hash(password, 12);

    try {
        await UserModel.create({
            username,
            password: hashedPassword,
        })
        res.status(201).json({
            message: "User created successfully",
        })
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error",
        })
        return;
    }
}

export const signInController = (req:Request, res:Response) => {

}