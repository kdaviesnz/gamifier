import express from 'express'

const InstructorAuthRouter = (collection) => {

    const router = express.Router()

    const instructorAuthController = require('../controllers/instructor.auth.controller')(collection)

    router.route('/api/instructor/auth/signin')
        .post(instructorAuthController.signin)

    router.route('/instructor/auth/signout')
        .get(instructorAuthController.signout)

    return router
}

module.exports = InstructorAuthRouter