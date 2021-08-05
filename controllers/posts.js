const express = require('express')
const router = express.Router()
const Posts = require('../models/posts.js')

// index route
router.get('/', (req, res) => {
    Posts.find({}, (err, foundPosts) => {
        res.json(foundPosts)
    })
})

// create route
router.post('/', (req, res) => {
    Posts.create(req.body, (err, createdPost) => {
        res.json(createdPost)
    })
})

// delete route
router.delete('/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id, (err, deletedPost) => {
        res.json(deletedPost)
    })
})

module.exports = router