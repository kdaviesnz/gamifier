console.log("RENDERING server/routes/instructor.auth.routes.js")

import Instructor from "../models/instructor.model";
import express from 'express'
//import instructorAuthCtrl from '../controllers/instructor.auth.controller'

const InstructorAuthRouter = (collection) => {

    const router = express.Router()

    router.route('/api/instructors/auth/signin')
        .post((req, res)=>{
            const instructor = new Instructor(collection)
            instructor.signin(req, res)
        })

    /*
    router.route('/instructor/auth/signout')
        .get(instructorAuthCtrl.signout)
        */

    return router
}




module.exports = InstructorAuthRouter

