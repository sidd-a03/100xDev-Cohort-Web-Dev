import express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel, TodoModel } from "./db.js";
import mongoose from "mongoose";
import authMiddleware from "./middlewares/auth.middleware.js";
import bcrypt from "bcrypt";

await mongoose.connect("mongodb+srv://achintasiddhanta0304_db_user:TgmPfNwW1rpBGWFq@cluster0.gfjyypd.mongodb.net/todo-app")

export const secret = "askjddbg"

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await UserModel.create({
            username,
            password: hashedPassword,
            name
        });

        res.json({
            message: 'User successfully created!',
        })
    } catch (e) {
        res.json({
            message: "Error creating user",
        })
    }
})

app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({ username });

    if (!user) {
        res.status(403).json({
            message: 'User Not Found',
        })
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (passwordMatched) {
        const token = jwt.sign({
            id: user._id.toString()
        }, secret);
        console.log(token);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: 'User not found!',
        })
    }
})

app.post('/todo', authMiddleware, async (req, res) => {
    const userId = req.userId;
    const description = req.body.description;
    const done = req.body.done;
    await TodoModel.create({
        description,
        done,
        userId
    })

    res.json({
        message: "Todo successfully created!",
    })
})

app.get('/todos', authMiddleware, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    })
    res.json({
        todos
    })
})


app.listen(3000);














