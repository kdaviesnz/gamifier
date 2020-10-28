import Student from "../models/student.model";

const StudentController = (collection) => {

    const student = new Student(collection)

    return {
        "list": (req, res)=> {
            res.json([{
                'status':403,
                'error':'Only admins can view students'
            }])
        },
        "create": (req, res) => {
            student.create(req, res)
        },
        "read": (req,res)=>{
            student.read(req, res)
        },
        "update": (req, res)=>{
            student.update(req,res)
        },
        "delete": (req, res)=>{
            student.remove(req,res)
        },
        userByID: (req, res, next, id) => {
            student.userByID(req, res, next, id)
        }
    }
}

module.exports = StudentController

