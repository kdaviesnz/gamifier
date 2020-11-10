import Lesson from "../models/lesson.model";

const LessonController = (collection) => {

    const lesson = new Lesson(collection)

    return {
        "create": (req, res) => {
            lesson.create(req, res)
        },
        "update": (req, res)=>{
            lesson.update(req,res)
        },
        "delete": (req, res)=>{
            lesson.remove(req,res)
        }
    }
}

module.exports = LessonController

