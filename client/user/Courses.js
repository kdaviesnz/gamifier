import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Course from './Course.js';
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

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


const Courses = (props) => {

    const classes = useStyles();

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
        }
        className={classes.root}>
        {
            props.courses.map(
                (course, i) => {
                    return (
                        <Course handleClick={handleClick} setOpen={setOpen} open={open} courseName={course.course.name} lessons={course.lessons} key={i} />
                    )
                }
            )
        }
    </List>
}

export default Courses


