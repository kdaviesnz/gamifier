import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import Collapse from "@material-ui/core/Collapse/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ReactHtmlParser from 'react-html-parser';

const Lesson = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return <div>
        <ListItem button className={props.classes.nested} onClick={handleClick}>
            <Typography>{props.lesson.title}</Typography>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {ReactHtmlParser(props.lesson.content)}
        </Collapse>
        <Divider />
    </div>
}

export default Lesson


