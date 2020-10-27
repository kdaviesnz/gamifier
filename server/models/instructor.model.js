console.log("RENDERING server/models/instructor.model.js")

import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
const crypto = require('crypto');
//import { ObjectId } from "mongodb"
import _ from 'lodash'

class Instructor {

    constructor(collection) {
        this.collection = collection
        this.state = {}
        this.authenticator = require('./authentication.model')()
    }

    create(req, res) {

        const validate = this.authenticator.validate(req.body.password, true)

        if (undefined !== validate.error) {
            res.status('403').json({
                error: validate.error
            })
        } else {

            // Check email
            if (req.body.email.match(/.+\@.+\..+/)===false) {
                res.status('402').json({
                    error: 'Email is invalid'
                })
            } else {
                this.collection.findOne({'email': req.body.email}, (err, instructor) => {
                    if (err) {
                        res.json({
                            'error': err
                        })
                    } else if (instructor) {
                        res.status('409').json({
                            error: 'Email already exists',
                            email: instructor.email
                        })
                    } else {

                        // We're ok
                        const salt = this.authenticator.makeSalt()
                        this.hashed_password = this.authenticator.encryptPassword(req.body.password, salt)
                        this.state = {
                            'first_name': req.body.first_name,
                            'last_name': req.body.last_name,
                            'email': req.body.email,
                            'password': this.hashed_password,
                            'created': Date.now(),
                            'salt':salt
                        }

                        this.collection.insertOne(this.state, (err, result) => {
                            if (err) {
                                res.json({
                                    'error': err
                                })
                            } else {
                                res.json({
                                    'status': 201,
                                    'message': 'Instructor created',
                                    'Location': '/api/instructor/' + result.insertedId
                                })
                            }
                        })
                    }

                })

            }

        }
    }

    signin(req, res) {
        this.collection.findOne({'email':req.body.email}, (err, instructor) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else if (instructor === null || ! instructor) {
                res.status('401').json({
                    error: "Instructor not found"
                })
            } else {

                if (!this.authenticator.authenticate(req.body.password, instructor.salt, instructor.password)) {
                    res.status('403').json({
                        error: "Invalid password",
                    })
                } else {

                    const token = jwt.sign({
                        _id: instructor._id,
                        algorithms: ['HS256'],
                    }, config.jwtSecret)

                    res.cookie("t", token, {
                        expire: new Date() + 9999
                    })

                    return res.json({
                        token,
                        instructor: {
                            _id: instructor._id,
                            first_name: instructor.first_name,
                            last_name: instructor.last_name,
                            email: instructor.email}
                    })

                }
            }
        })
    }

    userByID (req, res, next, id) {

        console.log(id)

        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(id);

        this.collection.findOne({'_id':o_id}, (err, instructor) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else if (instructor === null || ! instructor) {
                res.status('401').json({
                    error: "Instructor not found"
                })
            } else {
                req.profile = instructor
                next()
            }
        })

    }

    read (req, res)  {
        req.profile.hashed_password = undefined
        req.profile.salt = undefined
        res.json(req.profile)
    }

    update (req, res, next)  {

        const id= req.profile._id
        let instructor = req.profile

        instructor = _.extend(instructor, req.body)
        instructor.updated = Date.now()

        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(id);

        this.collection.updateOne({'_id':o_id}, {$set:instructor}, (err) => {
            if (err) {
                res.json({
                    'error':err
                })
            }else {
                res.json({
                        status: 200,
                        Location: '/api/instructor/' + id
                    }
                )
            }
        })

    }

    remove (req, res, next)  {
        const id= req.profile._id
        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(id);
        this.collection.deleteOne( {'_id':o_id}, (err) => {
            if (err) {
                res.json({
                    'error':err
                })
            }else {
                res.json({
                    'status':204
                })
            }
        })
    }


}

module.exports = Instructor