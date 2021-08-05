// dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()

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