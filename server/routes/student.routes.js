console.log("RENDERING server/routes/student.routes.js")

import express from 'express'
import userCtrl from '../controllers/user.controller'
import studentAuthCtrl from '../controllers/student.controller'

const router = express.Router()

router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create)

router.route('/api/users/:userId')
    .get(studentAuthCtrl.requireSignin, studentAuthCtrl.read)
    .put(studentAuthCtrl.requireSignin, studentAuthCtrl.hasAuthorization, userCtrl.update)
    .delete(studentAuthCtrl.requireSignin, studentAuthCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', studentAuthCtrl.userByID)

export default router

