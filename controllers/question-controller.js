module.exports = (app) => {
    const questionService = require('../services/question-service')

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['quizId']
        const questions = questionService.findQuestionsForQuiz(quizId)
        res.json(questions)
    }
    app.get('/api/quizzes/:quizId/questions',
        findQuestionsForQuiz)
}