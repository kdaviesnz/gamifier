import Student from "../models/student.model";

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