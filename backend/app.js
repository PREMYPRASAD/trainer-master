const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./middlewares/mongodb') //to init mongoDB

const logger = require('morgan') // for seeing api calls in terminal
const cors = require('cors')
app.use(logger('dev'))
app.use(cors()) //to connect frontend and backend without any disturbance


//api

const api = require('./routes/adminRoute');
app.use('/api', api)


// Server code 
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is connected to ${port}`)
})