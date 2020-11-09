import React, {Component} from 'react'
import Divider from "@material-ui/core/Divider"
import Lesson from "./Lesson";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import List from "@material-ui/core/List/List";

const Lessons = (props) => {

    return <List component="div" disablePadding subheader={
        <ListSubheader component="div" id="lessons">
            Select a lesson (user)
        </ListSubheader>
    }
                 className={classes.root}>
        {
            props.lessons.map((lesson, i)=><Lesson key={i} lesson={lesson} classes={classes}/>)
        }
        <Divider />
    </List>

}

export default Lessons


