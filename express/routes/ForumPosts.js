var express = require('express');
const { where } = require('sequelize');
const Post = require('../sequelize/forumposts');
var router = express.Router();
var mysql = require('mysql2');



router.get('/Forum', async (req, res, next) => {
    const posts = await Post.findAll();

    posts.every(post => post instanceof Post); // true


    res.send(posts)


});


router.post('/Forum', async (req, res, next) => {
    Post.create(req.body)
    .then((post) => res.json(post))
    .catch((error) => res.json({ error: error.message }));
})

module.exports = router;