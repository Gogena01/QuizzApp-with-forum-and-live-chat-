var express = require('express');
const { where } = require('sequelize');
const Question = require('../sequelize/question');
var router = express.Router();
var mysql = require('mysql2');
const Answer = require('../sequelize/answer');



router.get('/', async (req, res, next) => {
    //res.send('API is working properly');
    const questions = await Question.findAll();

    questions.every(question => question instanceof Question); // true


    const answers = await Answer.findAll();
    answers.every(answers => answers instanceof Answer);


    if (answers[1].questionId == questions[1].id) {
        res.send({ question: questions[1].question.question, questionId: questions[1].question.questionId, answer: answers[1].answer.answers, hint: answers[1].hint, questionId1: questions[1].question.questionId1 })
    }


});

module.exports = router;