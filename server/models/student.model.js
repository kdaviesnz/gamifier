import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
const crypto = require('crypto');
import _ from 'lodash'

class Student {

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
                this.collection.findOne({'email': req.body.email}, (err, student) => {
                    if (err) {
                        res.json({
                            'error': err
                        })
                    } else if (student) {
                        res.status('409').json({
                            error: 'Email already exists',
                            email: student.email
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
                                    'message': 'student created',
                                    'Location': '/api/student/' + result.insertedId
                                })
                            }
                        })
                    }

                })

            }

        }
    }

    signin(req, res) {
        this.collection.findOne({'email':req.body.email}, (err, student) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else if (student === null || ! student) {
                res.status('401').json({
                    error: "student not found"
                })
            } else {

                if (!this.authenticator.authenticate(req.body.password, student.salt, student.password)) {
                    res.status('403').json({
                        error: "Invalid password",
                    })
                } else {

                    const token = jwt.sign({
                        _id: student._id,
                        algorithms: ['HS256'],
                    }, config.jwtSecret)

                    res.cookie("t", token, {
                        expire: new Date() + 9999
                    })

                    return res.json({
                        token,
                        student: {
                            _id: student._id,
                            first_name: student.first_name,
                            last_name: student.last_name,
                            email: student.email}
                    })

                }
            }
        })
    }

    userByID (req, res, next, id) {

        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(id);

        this.collection.findOne({'_id':o_id}, (err, student) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else if (student === null || ! student) {
                res.status('401').json({
                    error: "student not found"
                })
            } else {
                req.profile = student
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
        let student = req.profile

        student = _.extend(student, req.body)
        student.updated = Date.now()

        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(id);

        this.collection.updateOne({'_id':o_id}, {$set:student}, (err) => {
            if (err) {
                res.json({
                    'error':err
                })
            }else {
                res.json({
                        status: 200,
                        Location: '/api/student/' + id
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

    signout (req, res){
        res.clearCookie("t")
        return res.status('200').json({
            message: "signed out"
        })
    }

}

module.exports = Student