import express from 'express'

const app = express()

// route handler
app.get('/', (req, res) => {
    res.send('Hello World')
    // res.json({
    //     status: 'success',
    // })
})

app.listen(3000) // PORT