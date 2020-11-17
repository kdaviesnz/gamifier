import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider"
import ReactHtmlParser from 'react-html-parser';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";
import LessonForm from  "./LessonForm"

class Lesson extends Component {

    constructor(props) {
        // https://www.youtube.com/watch?v=5MzM5nGbGCM
        super()
        this.classes = props.classes
        this.state = {
            "lesson_title":props.location.state.lesson.lesson.title,
            "lesson_id":props.location.state.lesson.lesson.id,
            "lesson_objectives":"",
            "lesson_content": props.location.state.lesson.lesson.content,
            "lesson_video_uri": "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            "open": false,
            "course_id": props.location.state.course_id
        }
        // @todo should be called onlhy if we have a page refresh
        this.fetchLesson()
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    handleContentChange = content => {
        this.setState({lesson_content: content})
    }

    closeDialog = event => {
        this.setState({open: false})
    }

    fetchLesson = () => {

        const lesson = {
            course_id: this.state.course_id || undefined,
            lesson_id: this.state.lesson_id || undefined
        }

        console.log('Fetching lesson')

        return fetch('/api/lesson/:' + lesson.course_id + '/:' + lesson.lesson_id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            this.setState({"lesson_title":data.title, "lesson_content":data.content, "lesson_video_uri":data.lesson_video_uri})

        }).catch((err) => {
            console.log(err)
        })

    }

    updateLesson = () => {

        const lesson = {
            lesson_title: this.state.lesson_title || undefined,
            lesson_objectives: this.state.lesson_objectives || undefined,
            lesson_content: this.state.lesson_content || undefined,
            lesson_video_uri: this.state.lesson_video_uri || undefined,
            course_id: this.state.course_id || undefined,
            lesson_id: this.state.lesson_id || undefined
        }

        return fetch('/api/lesson/:' + this.state.lesson_id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lesson)
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log('Lesson updated')
            console.log(data)
            if (data.status !== 200) {
                alert(data.error)
            } else {
                this.setState({open:true})
                this.fetchLesson()
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    deleteLesson = () => {

        if (confirm('Delete this lesson?')) {
            return fetch('/api/lesson/:' + this.state.lesson_id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json()
            }).then((data) => {
                console.log('Lesson deleted')
                console.log(data)
                if (data.status !== 200) {
                    alert(data.error)
                } else {
                    this.setState({open: true})
                }
            }).catch((err) => {
                console.log(err)
            })
        }

    }

    clickSubmit = () => {

        const lesson = {
            lesson_title: this.state.lesson_title || undefined,
            lesson_objectives: this.state.lesson_objectives || undefined,
            lesson_content: this.state.lesson_content || undefined,
            lesson_video_uri: this.state.lesson_video_uri || undefined,
            course_id: this.state.course_id || undefined,
            lesson_id: this.state.lesson_id || undefined
        }

        return fetch('/api/lesson', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lesson)
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data)
            if (data.status !== 201) {
                alert(data.error)
            } else {
                this.setState({open:true, "lesson_id":data.lesson_id})
                this.fetchLesson()
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    render() {
        return <React.Fragment>
            <CssBaseline/>
            <Container fixed>
                <Box>
                    <LessonForm lesson_id={this.state.lesson_id} course_id={this.state.course_id} open_dialog={this.state.open} lesson_video_uri={this.state.lesson_video_uri} lesson_content={this.state.lesson_content} lesson_title={this.state.lesson_title} lesson_objectives={this.state.lesson_objectives} handleChange={this.handleChange} handleContentChange={this.handleContentChange} createLesson={this.clickSubmit} updateLesson={this.updateLesson} deleteLesson={this.deleteLesson} closeDialog={this.closeDialog} />
                </Box>
            </Container>
        </React.Fragment>
    }

}

export default Lesson


