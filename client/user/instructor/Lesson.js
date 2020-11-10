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
            "lesson_objectives":"",
            "lesson_content": props.location.state.lesson.lesson.content,
            "lesson_video_uri": "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            "open": false
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    handleContentChange = content => {
        this.setState({lesson_content: content})
    }

    render() {
        return <React.Fragment>
            <CssBaseline/>
            <Container fixed>
                <Box>
                    <LessonForm open_dialog={this.state.open} lesson_video_uri={this.state.lesson_video_uri} lesson_content={this.state.lesson_content} lesson_title={this.state.lesson_title} lesson_objectives={this.state.lesson_objectives} handleChange={this.handleChange} handleContentChange={this.handleContentChange} />
                </Box>
            </Container>
        </React.Fragment>
    }

}

export default Lesson


