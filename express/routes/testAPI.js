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


    if (answers[0].questionId == questions[0].id) {
        res.send({ question: questions[0].question.question, questionId: questions[0].question.questionId, answer: answers[0].answer.answers, hint: answers[0].hint })
    }

});

router.get('/getNext/:id', async (req, res, next) => {
    let id = req.params.id
    //res.send('API is working properly');
    const questions = await Question.findAll();

    questions.every(question => question instanceof Question); // true


    const answers = await Answer.findAll();
    answers.every(answers => answers instanceof Answer);

    res.send({ id: questions[Number(id + 1)].id, question: questions[Number(id) + 1].question.question, questionId: questions[Number(id) + 1].question.questionId, answer: answers[Number(id) + 1].answer.answers, hint: answers[Number(id) + 1].hint, description:questions[Number(id + 1)].question.description,questionId1: questions[1].question.questionId1  })


});

module.exports = router;