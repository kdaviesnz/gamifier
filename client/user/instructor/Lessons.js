import React, {Component} from 'react'
import Divider from "@material-ui/core/Divider"
import LessonEditable from "./Lesson";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import List from "@material-ui/core/List/List";
import {Link} from 'react-router-dom'
import ListItem from "@material-ui/core/ListItem/ListItem";

const Lessons = (props) => {

    return <List component="div" disablePadding subheader={
        <ListSubheader component="div" id="lessons">
            Select a lesson (instructor)
        </ListSubheader>
    }
                 className={props.classes.root}>
        {
            props.lessons.map((lesson, i)=><ListItem key={i}><Link to={{
                pathname: "/instructor/lessons/:" + lesson.id,
                state: {
                    lesson: {lesson}
                }
                }} classes={props.classes}>{lesson.title}</Link></ListItem>
                )
        }
        <Divider />
    </List>

}

export default Lessons


