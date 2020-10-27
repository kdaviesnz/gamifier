console.log("RENDERING server/controllers/user.controller.js")


import User from '../models/user.model'
import _ from 'lodash'
//import errorHandler from './error.controller'

const create = (req, res, next) => {
    // “const user = new User(req.body)”
    res.json({})
}
const list = (req, res) => {
    console.log("listing users")
    res.json([{
        "id":"B",
        "name":"Bob"
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