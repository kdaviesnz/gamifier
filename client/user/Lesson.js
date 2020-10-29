import React, {Component} from 'react'
import AccordionSummary from "@material-ui/core/AccordionSummary/AccordionSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import Accordion from "@material-ui/core/Accordion/Accordion";
import Divider from "@material-ui/core/Divider"

const Lesson = (props) => {
    return <section>
        <Typography>{props.lesson.title}</Typography>
        {props.lesson.content}
        <Divider />
    </section>

}

export default Lesson


