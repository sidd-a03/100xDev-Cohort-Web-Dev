import express from 'express';
import jwt from 'jsonwebtoken';
import path from "path";
import { fileURLToPath } from "url";

const JWT_SECRET = "adfnalsfjlankdg"
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [];

app.use(express.json());

const signInHandler = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);  // convert their username to jwt

        // user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
}

const signUpHandler = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username);

    if(!user) {
        users.push({
            username,
            password
        })
        res.send({
            message: "You have signed up"
        })
    }
    else {
        res.send({
            message: "Username exist"
        })
    }

    console.log(users);
}

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;
    const verifyUser = jwt.verify(token, JWT_SECRET);
    const username = verifyUser.username;

    if(username) {
        req.username = username;
        next();
    } else {
        res.send({
            message: "Unauthorized"
        })
    }
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post('/signin', signInHandler)

app.post('/signup', signUpHandler)

app.get('/me', authMiddleware, (req, res) => {
    const foundUser = users.find(user => user.username === req.username)
    if(foundUser) {
        res.send({
            username: foundUser.username,
        })
    } else {
        res.send({
            message: "Invalid username or password"
        })
    }
})

app.listen(3000);