import Student from "../models/student.model";
import moduleId from "jss/src/utils/moduleId";


const StudentAuthController = (collection)=> {

    const student = new Student(collection)

    return {
        "signin": (req, res) =>{
            student.signin(req, res)
        },
        "signout": (req, res) => {
            student.signout(req, res)
        }
    }
}

module.exports = StudentAuthController