import User from '../models/user.model'
import _ from 'lodash'
//import errorHandler from './error.controller'

const create = (req, res, next) => {
    // “const user = new User(req.body)”
}
const list = (req, res) => {
    console.log("listing users")
    res.json({})
}
const userByID = (req, res, next, id) => {

}
const read = (req, res) => {

}
const update = (req, res, next) => {

}
const remove = (req, res, next) => {

}

//export default { create, userByID, read, list, remove, update }

module.exports = { create, userByID, read, list, remove, update }
