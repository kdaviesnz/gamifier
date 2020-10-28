import express from 'express'

const InstructorRouter = (collection) => {

    const router = express.Router()
    const instructorController = require('../controllers/instructor.controller')(collection)

    router.route('/api/instructors')
        .get(
            instructorController.list
        )
        .post(
           instructorController.create
        )

    const Authenticator =  require("../models/authentication.model")();

    router.route('/api/instructor/:userId')
        .get(instructorController.read)
        .put(Authenticator.requireSignin, Authenticator.hasAuthorization, instructorController.update)
        .delete(Authenticator.requireSignin, Authenticator.hasAuthorization, instructorController.delete)

    router.param('userId', instructorController.userByID)

    return router
}

module.exports = InstructorRouter


