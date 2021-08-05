const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    post: String,
    image: String,
    comments: [String],
    feeling: { type: String, enum: ['Happy', 'Sad', 'Excited', 'Blessed', 'Anxious'] }
})

const Posts = mongoose.model('Post', postSchema)

module.exports = Posts