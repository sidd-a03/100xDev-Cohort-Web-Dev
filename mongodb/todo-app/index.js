import express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel, TodoModel } from "./db.js";
import mongoose from "mongoose";
import authMiddleware from "./middlewares/auth.middleware.js";

await mongoose.connect("mongodb+srv://achintasiddhanta0304_db_user:TgmPfNwW1rpBGWFq@cluster0.gfjyypd.mongodb.net/todo-app")

export const secret = "askjddbg"

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        username,
        password,
        name
    });

    res.json({
        message: 'User successfully created!',
    })
})

app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({ username, password });

    console.log(user);

    if (user) {
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














