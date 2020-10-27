console.log("RENDERING server/routes/instructor.routes.js")

import express from 'express'
import userCtrl from '../controllers/user.controller'
import instructorAuthCtrl from '../controllers/instructor.controller'

const router = express.Router()

router.route('/api/users')
    .get(instructorAuthCtrl.list)
    .post(instructorAuthCtrl.create)

router.route('/api/users/:userId')
    .get(instructorAuthCtrl.requireSignin, userCtrl.read)
    .put(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorAuthCtrl.update)
    .delete(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorAuthCtrl.remove)

router.param('userId', instructorAuthCtrl.userByID)

export default router

