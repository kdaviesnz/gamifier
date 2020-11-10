import React, {Component} from 'react'
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider"
import ListItem from '@material-ui/core/ListItem'
import LessonsEditable from './Lessons'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Course = (props) => {
    return <div>
        <ListItem button onClick={props.handleClick}>
            <Typography>{props.courseName}</Typography>
            <Divider />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
            <LessonsEditable course_id={props.course_id} lessons={props.lessons} classes={props.classes} key={props.courseName}/>
        </Collapse>
    </div>

}

export default Course


