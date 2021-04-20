const express = require('express')
const mongoose = require('mongoose')
const app = express();


/*
mongoose.connect("mongodb://localhost:27017/whiteboard", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
);
*/
mongoose.connect(
    "mongodb+srv://chadcomiter:whiteboard@cluster0.s5lvr.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require ( './controllers/quizzes-controller' ) ( app )
require ( './controllers/question-controller' ) ( app )
require ( './controllers/quiz-attempts-controller' ) ( app )

app.listen(3200);
