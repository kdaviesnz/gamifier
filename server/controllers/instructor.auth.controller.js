import Instructor from "../models/instructor.model";

const InstructorAuthController = (collection)=> {

    const instructor = new Instructor(collection)

    return {
        "signin": (req, res) =>{
            instructor.signin(req, res)
        },
        "signout": (req, res) => {
            instructor.signout(req, res)
        }
    }
}

module.exports = InstructorAuthController