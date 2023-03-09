var express = require('express');
const { where } = require('sequelize');
const LangQuestions = require('../sequelize/langQuestions');
var router = express.Router();
var mysql = require('mysql2');



router.get('/langquest', async (req, res, next) => {
    const langquest = await LangQuestions.findAll();

    langquest.every(post => post instanceof LangQuestions); // true


    res.send({question:langquest[0].question , answers:langquest[0].answers, id:langquest[0].id})


});


router.get('/langquest/:id', async (req, res, next) => {
    const index = req.params.id
    const langquest = await LangQuestions.findAll();

    langquest.every(post => post instanceof LangQuestions); // true


    res.send({question:langquest[index].question , answers:langquest[index].answers, id:langquest[index].id})


});


module.exports = router

