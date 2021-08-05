// dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// require controllers
const postsController = require('./controllers/posts.js')

// use controllers
app.use('/posts', postsController)

// listeners
app.listen(3000, () => {
    console.log('BLOG: listening...', 3000);
})

mongoose.connect(
    'mongodb://localhost:27017/reactblog',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useFindAndModify: false 
    }
)

mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})