console.log("RENDERING server/controllers/user.controller.js")


import User from '../models/user.model'
import Instructor from '../models/instructor.model'
import _ from 'lodash'
//import errorHandler from './error.controller'
const db = client.db(process.env.MONGODB)

const create = (req, res, next) => {
    const instructor = new Instructor(req.body, db)
    const result = instructor.create()
    res.json(result)
}
const list = (req, res) => {
    res.json([{
        'status':403,
        'error':'Only admins can view instructors'
    }])
}
const userByID = (req, res, next, id) => {
    res.json({})
}
const read = (req, res) => {
    res.json({})
}
const update = (req, res, next) => {
    res.json({})
}
const remove = (req, res, next) => {
    res.json({})
}

//export default { create, userByID, read, list, remove, update }

module.exports = { create, userByID, read, list, remove, update }


console.log("LOADED server/controllers/user.controller.js")