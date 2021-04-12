const express = require('express')
const app = express()

app.use(
    function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
        res.header('Access-Control-Allow-Methods', 
            'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        next();
    }
);

const quizController = require('./controllers/quiz-controller')
quizController(app)

const questionController = require('./controllers/question-controller')
questionController(app)

app.listen(3200);