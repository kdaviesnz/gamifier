import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
const crypto = require('crypto');
import _ from 'lodash'


class Lesson {

    constructor(collection) {
        this.collection = collection
        this.state = {}
        this.authenticator = require('./authentication.model')()
    }

    read(req, res ) {



        const ObjectId = require('mongodb').ObjectId;
        const course_object_id = new ObjectId(req.params.courseId.slice(1)); //ignore ":"


        this.collection.findOne({'_id':course_object_id}, (err, course) => {
            if (err) {
                res.json({
                    'error': err
                })
            } else if (course === null || !course) {
                res.status('401').json({
                    error: "Course not found",
                    params:req.params
                })
            } else {

                const lesson = _.find(course.lessons, (lesson)=> {
                    return lesson.id === req.params.lessonId.slice(1) // ignore ":"
                })

                if (lesson === undefined) {
                    res.status('401').json({
                        error: "Lesson not found"
                    })
                } else {
                    res.status('200').json(lesson)
                }

            }
        })

    }

    create(req, res) {

        const ObjectId = require('mongodb').ObjectId;
        const course_object_id = new ObjectId(req.body.course_id);

        this.collection.findOne({'_id':course_object_id}, (err, course) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else if (course === null || ! course) {
                res.status('401').json({
                    error: "Course not found"
                })
            } else {

                const uniqid = require('uniqid');

                const new_lesson = {
                    'lesson_title': req.body.lesson_title,
                    'lesson_objectives': req.body.lesson_objectives,
                    'lesson_content': req.body.lesson_content,
                    'lesson_video_uri': req.body.lesson_video_uri,
                    'created': Date.now(),
                    'id':uniqid()
                }

                if (undefined === course.lessons) {
                    course.lessons = []
                }

                course.lessons.push(new_lesson)

                this.collection.updateOne({'_id':course_object_id}, {$set:{'lessons':course.lessons}}, (err) => {
                    if (err) {
                        res.json({
                            'error': err
                        })
                    } else {
                        res.json({
                            'status': 201,
                            'message': 'Course updated with new lesson',
                            'Location': '/api/course/' + course._id,
                            'lesson_id': new_lesson.id
                        })
                    }
                })

            }
        })

    }

    update (req, res, next)  {

        const ObjectId = require('mongodb').ObjectId;
        const course_object_id = new ObjectId(req.body.course_id);

        this.collection.findOne({'_id':course_object_id}, (err, course) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else if (course === null || ! course) {
                res.status('401').json({
                    error: "Course not found"
                })
            } else {


                course.lessons = course.lessons.map((lesson)=>{
                    if (lesson.id === req.body.lesson_id) {
                        return {
                            'title': req.body.lesson_title,
                            'lesson_objectives': req.body.lesson_objectives,
                            'content': req.body.lesson_content,
                            'lesson_video_uri': req.body.lesson_video_uri,
                            'created': lesson.created === null? Date.now : lesson.created,
                            'updated': Date.now(),
                            'id':req.body.lesson_id
                        }
                    }
                    return lesson
                })

                this.collection.updateOne({'_id':course_object_id}, {$set:{'lessons':course.lessons}}, (err) => {
                    if (err) {
                        res.json({
                            'error': err
                        })
                    } else {
                        res.json({
                            'status': 200,
                            'message': 'Course updated with updated lesson',
                            'Location': '/api/course/' + course._id,
                            'lesson_id': req.body.lesson_id,
                            'content': req.body.lesson_content
                        })
                    }
                })

            }
        })


    }

    remove (req, res, next)  {

    }


}

module.exports = Lesson