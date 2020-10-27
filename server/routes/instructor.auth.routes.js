console.log("RENDERING server/routes/instructor.auth.routes.js")

import express from 'express'
import instructorAuthCtrl from '../controllers/instructor.auth.controller'

const router = express.Router()

router.route('/instructor/auth/signin')
    .post((req, res)=>{

    })
router.route('/instructor/auth/signout')
    .get(instructorAuthCtrl.signout)

// export default router
module.exports = router

