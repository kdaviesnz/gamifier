console.log("RENDERING server/controllers/auth.controller.js")

import User from '../models/user.model'
// @todo
//import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'



const signin = (req, res) => {
    User.findOne({
        "email": req.body.email
    }, (err, user) => {

        if (err || !user)
            return res.status('401').json({
                error: "User not found"
            })

        if (!user.authenticate(req.body.password)) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }

        // @todo
        /*
        const token = jwt.sign({
            _id: user._id,
            algorithms: ['HS256'],
        }, config.jwtSecret)
        */
        const token = 'hello world'

        res.cookie("t", token, {
            expire: new Date() + 9999
        })

        return res.json({
            token,
            user: {_id: user._id, name: user.name, email: user.email}
        })

    })
}

const signout = (req, res) => {
    res.clearCookie("t")
    return res.status('200').json({
        message: "signed out"
    })
}

const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    algorithms: ['HS256']
})

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id
    if (!(authorized)) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    }
    next()
}

export default {
    signin,
    signout,
    requireSignin,
    hasAuthorization
}

console.log("LOADED server/controllers/auth.controller.js")