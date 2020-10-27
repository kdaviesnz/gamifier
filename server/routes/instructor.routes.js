import Instructor from "../models/instructor.model";

console.log("RENDERING server/routes/instructor.routes.js")

import express from 'express'
//import instructorCtrl from '../controllers/instructor.controller'
//import instructorAuthCtrl from '../controllers/instructor.auth.controller'

const InstructorRouter = (collection) => {
    
    const router = express.Router()
    
    router.route('/api/instructors')
        .get((req, res)=> {
            res.json([{
                'status':403,
                'error':'Only admins can view instructors'
            }])
        })
        .post(
            (req, res) => {
                const instructor = new Instructor(collection)
                instructor.create(req, res)
            }
        )
    
    /*
    router.route('/api/instructors/:userId')
        .get(instructorAuthCtrl.requireSignin, instructorCtrl.read)
        .put(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorCtrl.update)
        .delete(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorCtrl.remove)

    router.param('userId', instructorAuthCtrl.userByID)
    */
    
    return router
}

module.exports = InstructorRouter


