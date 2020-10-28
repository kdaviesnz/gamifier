import express from 'express'

const StudentRouter = (collection) => {

    const router = express.Router()
    const studentController = require('../controllers/student.controller')(collection)

    router.route('/api/students')
        .get(
            studentController.list
        )
        .post(
           studentController.create
        )

    const Authenticator =  require("../models/authentication.model")();

    router.route('/api/student/:userId')
        .get(studentController.read)
        .put(Authenticator.requireSignin, Authenticator.hasAuthorization, studentController.update)
        .delete(Authenticator.requireSignin, Authenticator.hasAuthorization, studentController.delete)

    router.param('userId', studentController.userByID)

    return router
}

module.exports = StudentRouter


