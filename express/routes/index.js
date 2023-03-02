var express = require('express');
const Question = require('../sequelize/question');
var router = express.Router();

/* GET home page. */
router.get('/exercise', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

module.exports = router;
