import express from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "adfnalsfjlankdg"
const app = express();

const users = [];

app.use(express.json());

const signInHandler = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({
            username: username
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

app.post('/signin', signInHandler)

app.post('/signup', signUpHandler)

app.get('/me', (req, res) => {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: "sidd.a03"}
    const username = decodedInformation.username;

    const user = users.find(u => u.username === username);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000);