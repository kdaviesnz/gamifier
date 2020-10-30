import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import CourseEditable from './Course.js';
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

const Courses = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="courses">
                Select a course
            </ListSubheader>
        }>
        {
            props.courses.map(
                (course, i) => {
                    return (
                        <CourseEditable handleClick={handleClick} setOpen={setOpen} open={open} courseName={course.course.name} lessons={course.lessons} key={i} classes={props.classes}/>
                    )
                }
            )
        }
    </List>
}

export default Courses


