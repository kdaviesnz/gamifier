import React, {Component} from 'react'
import Divider from "@material-ui/core/Divider"
import Lesson from "./Lesson";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import List from "@material-ui/core/List/List";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Lessons = (props) => {

    const classes = useStyles();

    return <List component="div" disablePadding subheader={
        <ListSubheader component="div" id="lessons">
            Select a lesson
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


