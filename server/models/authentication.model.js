console.log("RENDERING server/models/authentication.model.js")

import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
const crypto = require('crypto');

const Authentication = ()=> {

   return {

       makeSalt: () => {
           return Math.round((new Date().valueOf() * Math.random())) + ''
       },

       validate: (plain_text_password, is_new) => {
           if (plain_text_password && plain_text_password < 6) {
               return {'error': 'Password must be at least 6 characters.'}
           }
           if (is_new && !plain_text_password) {
               return {'error': 'Password is required'}
           }
           return {'status': 'ok'}
       },

       encryptPassword: (plain_text_password, salt) => {

           if (!plain_text_password) return ''
           try {
               return crypto
                   .createHmac('sha1', salt)
                   .update(plain_text_password)
                   .digest('hex')
           } catch (err) {
               return err.toString()
           }
       },

       authenticate: function (plain_text_password, salt, hashed_password) {
           return this.encryptPassword(plain_text_password, salt) === hashed_password
       },

       requireSignin: expressJwt({
           secret: config.jwtSecret,
           userProperty: 'auth',
           algorithms: ['HS256']
       }),

       hasAuthorization: (req, res, next) => {
           const authorized = req.profile && req.auth && req.profile._id.toString() === req.auth._id
           if (!(authorized)) {
               return res.status('403').json({
                   error: "User is not authorized"
               })
           }
           next()
       }


   }


}

module.exports = Authentication