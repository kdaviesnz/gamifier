console.log("RENDERING server/routes/instructor.auth.routes.js")

import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/instructor/auth/signin')
    .post(authCtrl.signin)
router.route('/instructor/auth/signout')
    .get(authCtrl.signout)

// export default router
module.exports = router

