import express from 'express'

const InstructorAuthRouter = (collection) => {

    const router = express.Router()

    const instructorAuthController = require('../controllers/student.auth.controller')(collection)

    router.route('/api/instructors/auth/signin')
        .post(instructorAuthController.signin)

    router.route('/instructor/auth/signout')
        .get(instructorAuthController.signout)

    return router
}




module.exports = InstructorAuthRouter

