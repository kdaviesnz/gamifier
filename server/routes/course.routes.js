import express from 'express'

const CourseRouter = (collection) => {

    const router = express.Router()
    const courseController = require('../controllers/course.controller')(collection)

    router.route('/api/courses')
        .get(
            courseController.list
        )
        .post(
           courseController.create
        )

    const Authenticator =  require("../models/authentication.model")();

    router.route('/api/courses/:userId')
        .get(courseController.list)

    router.route('/api/course/:userId')
        .get(courseController.read)
        .put(Authenticator.requireSignin, Authenticator.hasAuthorization, courseController.update)
        .delete(Authenticator.requireSignin, Authenticator.hasAuthorization, courseController.delete)

    router.param('userId', courseController.userByID)

    return router
}

module.exports = CourseRouter


