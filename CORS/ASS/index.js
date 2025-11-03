import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

/*
*  if we want we can restrict the domain
* app.use(cors({
    domain: ["http://abcd.com", "http://xyz.com"]
}))
* */

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
})

app.listen(3000);