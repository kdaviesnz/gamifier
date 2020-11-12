import express from 'express'

const LessonRouter = (collection) => {

    const router = express.Router()
    const lessonController = require('../controllers/lesson.controller')(collection)

    const Authenticator =  require("../models/authentication.model")();

    router.route('/api/lesson')
        .post(
            lessonController.create
        )

    // @todo authorization
    router.route('/api/lesson/:courseId/:lessonId')
        .get(lessonController.read)

    router.route('/api/lesson/:lessonId')
        .put(lessonController.update)
        .delete(lessonController.delete)

    return router
}

module.exports = LessonRouter


