import React, {Component} from 'react'
import AccordionSummary from "@material-ui/core/AccordionSummary/AccordionSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import Accordion from "@material-ui/core/Accordion/Accordion";
import Lesson from "./Lesson"
import Divider from "@material-ui/core/Divider"
import ListItem from '@material-ui/core/ListItem'

const Course = (props) => {
  return <ListItem>
          <Typography>{props.courseName}</Typography>
          {
            props.lessons.map((lesson, i)=><Lesson key={i} lesson={lesson} />)
          }
      <Divider />
    </ListItem>
}

export default Course


