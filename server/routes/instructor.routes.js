import Instructor from "../models/instructor.model";

console.log("RENDERING server/routes/instructor.routes.js")

import express from 'express'
import instructorCtrl from '../controllers/instructor.controller'
import instructorAuthCtrl from '../controllers/instructor.auth.controller'

const router = express.Router()

const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
require("dotenv").config()

// Database Connection URL
const uri = "mongodb+srv://" + process.env.MONGODBUSER + ":" + process.env.MONGODBPASSWORD + "@cluster0.awqh6.mongodb.net/gamifier?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(err => {
    assert.equal(err, null);
    const collection = mongoClient.db('gamifier')
    console.log("Connected successfully to mongodb server")
    router.route('/api/instructors')
        .get((req, res)=> {
            res.json([{
                'status':403,
                'error':'Only admins can view instructors'
            }])
        })
        .post(
            (req, res) => {
                db.collection("instructors").insertOne(req.body, (err, result) => {
                    if (err) {
                        res.json({
                            'error':err
                        })
                    } else {
                        res.json({
                            'status':201,
                            'message': 'Instructor created'
                        })
                    }
                })
            }
        )
    /*
    router.route('/api/instructors/:userId')
        .get(instructorAuthCtrl.requireSignin, instructorCtrl.read)
        .put(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorCtrl.update)
        .delete(instructorAuthCtrl.requireSignin, instructorAuthCtrl.hasAuthorization, instructorCtrl.remove)

    router.param('userId', instructorAuthCtrl.userByID)
    */
})



export default router

