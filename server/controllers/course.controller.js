import Course from "../models/course.model";

const CourseController = (collection) => {

    const course = new Course(collection)

    return {
        "list": (req, res)=> {
            course.list(req, res)
        },
        "create": (req, res) => {
            course.create(req, res)
        },
        "read": (req,res)=>{
            course.read(req, res)
        },
        "update": (req, res)=>{
            course.update(req,res)
        },
        "delete": (req, res)=>{
            course.remove(req,res)
        },
        userByID: (req, res, next, id) => {
            course.userByID(req, res, next, id)
        }
    }
}

module.exports = CourseController

