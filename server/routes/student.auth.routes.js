console.log("RENDERING server/routes/student.auth.routes.js")

import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/student/auth/signin')
    .post(authCtrl.signin)
router.route('/student/auth/signout')
    .get(authCtrl.signout)

// export default router
module.exports = router

