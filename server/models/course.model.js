import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
const crypto = require('crypto');
import _ from 'lodash'

class Course {

    constructor(collection) {
        this.collection = collection
        this.state = {}
        this.authenticator = require('./authentication.model')()
    }

    create(req, res) {


    }

    userByID (req, res, next, id) {

        req.instructor_id = id
        next()

    }

    list (req, res)  {

        let s = {}

        if (undefined !== req.instructor_id) {
            s= {
                'instructors': req.instructor_id
            }
        }

        this.collection.find(s).toArray((err, courses) => {
            if (err) {
                res.json({
                    'error': err
                })
            } else{
                res.status('201').json({
                    courses
                })
            }
        })
    }

    read (req, res)  {


    }


    update (req, res, next)  {



    }

    remove (req, res, next)  {

    }



}

module.exports = Course