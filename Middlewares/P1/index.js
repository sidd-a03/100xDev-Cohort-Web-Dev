import express from 'express'

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) { // middleware
    requestCount++;
    console.log(`Total number of requests: ${requestCount}`);
    next();
}

function realSumHandler(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a + b
    })
}

app.get('/sum', requestIncreaser, realSumHandler);

/*
*  if you want to use middleware in all the routes then use
*
* app.use(requestIncreaser);
*
* app.get('/sum', requestIncreaser, realSumHandler);
*
* app.get('/multiply', requestIncreaser, realSumHandler);
*
* app.get('/divide', requestIncreaser, realSumHandler);
*
* */
// express.json is a function which returns a function //

app.listen(3000)