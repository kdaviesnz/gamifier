import express from 'express'

const LessonRouter = (collection) => {

    const router = express.Router()
    const lessonController = require('../controllers/lesson.controller')(collection)

    const Authenticator =  require("../models/authentication.model")();

    router.route('/api/lesson')
        .post(
            lessonController.create
        )

    router.route('/api/lesson/:lessonId')
        .put(Authenticator.requireSignin, Authenticator.hasAuthorization, lessonController.update)
        .delete(Authenticator.requireSignin, Authenticator.hasAuthorization, lessonController.delete)

    return router
}

module.exports = LessonRouter


