import Instructor from "../models/instructor.model";

const InstructorController = (collection) => {

    const instructor = new Instructor(collection)

    return {
        "list": (req, res)=> {
            res.json([{
                'status':403,
                'error':'Only admins can view instructors'
            }])
        },
        "create": (req, res) => {
            instructor.create(req, res)
        },
        "read": (req,res)=>{
            instructor.read(req, res)
        },
        "update": (req, res)=>{
            instructor.update(req,res)
        },
        "delete": (req, res)=>{
            instructor.remove(req,res)
        },
        userByID: (req, res, next, id) => {
            instructor.userByID(req, res, next, id)
        }
    }
}

module.exports = InstructorController

