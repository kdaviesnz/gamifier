import Instructor from "../models/instructor.model";
import moduleId from "jss/src/utils/moduleId";


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