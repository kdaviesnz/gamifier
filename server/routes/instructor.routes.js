console.log("RENDERING server/routes/instructor.routes.js")

import express from 'express'
import instructorCtrl from '../controllers/instructor.controller'
import instructorAuthCtrl from '../controllers/instructor.controller'

const router = express.Router()

router.route('/api/instructors')
    .get(instructorCtrl.list)
    .post(instructorCtrl.create)

router.route('/api/instructors/:userId')
    .get(instructorAuthCtrl.requireSignin, instructorCtrl.read)
    .put(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorCtrl.update)
    .delete(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorCtrl.remove)

router.param('userId', instructorAuthCtrl.userByID)

export default router

