require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;



connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
})
connection.on('error', (error) => {
    console.log('MongoDB Error', err)
})

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send("hello world!")
})

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log("App is listening on ", PORT)
})