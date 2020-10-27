console.log("RENDERING server/models/instructor.model.js")

import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
const crypto = require('crypto');

class Instructor {

    constructor(collection) {
        this.collection = collection
        this.state = {}
    }

    makeSalt() {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }

    validate(plain_text_password, is_new) {
        if (plain_text_password && plain_text_password < 6) {
            return {'error':'Password must be at least 6 characters.'}
        }
        if (is_new && !plain_text_password) {
            return {'error':'Password is required'}
        }
        return {'status':'ok'}
    }

    encryptPassword(plain_text_password, salt) {

        if (!plain_text_password) return ''
        try {
            return crypto
                .createHmac('sha1',salt)
                .update(plain_text_password)
                .digest('hex')
        } catch (err) {
            return err.toString()
        }
    }


    create(req, res) {

        const validate = this.validate(req.body.password, true)

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
                        const salt = this.makeSalt()
                        this.hashed_password = this.encryptPassword(req.body.password, salt)
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
                                    'message': 'Instructor created'
                                })
                            }
                        })
                    }

                })

            }

        }
    }

    authenticate (plain_text_password, salt) {
        return this.encryptPassword(plain_text_password, salt) === this.hashed_password
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

                this.hashed_password = instructor.password
                if (!this.authenticate(req.body.password, instructor.salt)) {
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

}

module.exports = Instructor