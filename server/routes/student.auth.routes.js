import express from 'express'

const StudentAuthRouter = (collection) => {

    const router = express.Router()
    const studentAuthController = require('../controllers/student.auth.controller')(collection)

    router.route('/api/students/auth/signin')
        .post(studentAuthController.signin)

    router.route('/student/auth/signout')
        .get(studentAuthController.signout)

    return router
}

module.exports = StudentAuthRouter

