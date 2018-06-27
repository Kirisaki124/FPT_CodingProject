const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const articleRouter = require('./api/articles/router')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

mongoose.connect('mongodb://localhost:27017/fpt_database', err => {
    if (err) console.log(err)
    else console.log("Database connected")
})

app.use('/api/articles', articleRouter)


const port = 1234
app.listen(port, err => {
    if (err) console.log(err)
    console.log('Server start at ' + port)
})