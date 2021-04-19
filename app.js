const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


app.use(
    function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
        res.header('Access-Control-Allow-Methods', 
            'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        next();
    }
);

const quizController = require('./controllers/quizzes-controller')
quizController(app)

const questionController = require('./controllers/question-controller')
questionController(app)

app.listen(3200);