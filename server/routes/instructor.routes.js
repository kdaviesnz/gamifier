import Instructor from "../models/instructor.model";

console.log("RENDERING server/routes/instructor.routes.js")

import express from 'express'
//import instructorCtrl from '../controllers/instructor.controller'
//import instructorAuthCtrl from '../controllers/instructor.auth.controller'

const InstructorRouter = (collection) => {
    
    const router = express.Router()
    const instructor = new Instructor(collection)

    router.route('/api/instructors')
        .get((req, res)=> {
            res.json([{
                'status':403,
                'error':'Only admins can view instructors'
            }])
        })
        .post(
            (req, res) => {

                instructor.create(req, res)
            }
        )

    const Authenticator =  require("../models/authentication.model")();

    router.route('/api/instructor/:userId')
        .get((req,res)=>{
            instructor.read(req, res)
        })
        .put(Authenticator.requireSignin, Authenticator.hasAuthorization, (req, res)=>{
                instructor.update(req,res)
            }
        )
        .delete(Authenticator.requireSignin, Authenticator.hasAuthorization, (req, res)=>{
                instructor.remove(req,res)
            }
        )
/*
    router.route('/api/instructor/:userId')
        .get(Authenticator.requireSignin, instructor.read)
        .put(Authenticator.requireSignin, Authenticator.hasAuthorization, instructor.update)
        .delete(Authenticator.requireSignin, Authenticator.hasAuthorization, instructor.remove)


*/

    router.param('userId', (req, res,next, id)=> {
        instructor.userByID(req, res, next, id)
    })
    
    return router
}

module.exports = InstructorRouter


