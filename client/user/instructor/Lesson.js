import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider"
import ReactHtmlParser from 'react-html-parser';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";

const Lesson = (props) => {

    console.log("Lesson")
    console.log(props)

    return  <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box className={props.classes}>
                    {props.location.state.lesson.lesson.title}
                    {ReactHtmlParser(props.location.state.lesson.lesson.content)}
                </Box>
            </Container>
        </React.Fragment>

}

export default Lesson


