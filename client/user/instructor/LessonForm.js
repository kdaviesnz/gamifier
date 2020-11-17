import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {Link} from "react-router-dom";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Icon from '@material-ui/core/Icon'
// @see https://www.npmjs.com/package/material-ui-editor
import Editor from 'material-ui-editor'
import ReactPlayer from 'react-player'

const LessonForm = (props) => {

    return <div><Card>
        <CardContent>
            <TextField id="course_id" label="course id" value={props.course_id} /><br/>
            <TextField id="lesson_id" label="lesson id" value={props.lesson_id} /><br/>
            <Typography type="headline" component="h2">
                Add / Edit Lesson
            </Typography>
            <box>
                <TextField id="lesson_title" label="Lesson title" value={props.lesson_title} onChange={props.handleChange('lesson_title')} /><br/>
               <TextField id="lesson_objectives" label="Lesson objectives" value={props.lesson_objectives} onChange={props.handleChange('lesson_objectives')} />
            </box>
            <box>
                <ReactPlayer url={props.lesson_video_uri} />
                <TextField id="lesson_video_uri" label="Video uri" value={props.lesson_video_uri} onChange={props.handleChange('lesson_video_uri')} />
            </box>
            <box>
                <Editor content={props.lesson_content}
                    onChange={props.handleContentChange}/>
            </box>
        </CardContent>
        <CardActions>
            {
                props.lesson_id===null?
                    <Button color="primary" variant="outlined" onClick={props.createLesson}>Create Lesson</Button>
                    :
                    <Button color="primary" variant="outlined" onClick={props.updateLesson}>Update Lesson</Button>
            }
            <Button color="primary" variant="outlined" onClick={props.deleteLesson}>Delete Lesson</Button>
        </CardActions>


    </Card>

        <Dialog open={props.open_dialog} disableBackdropClick={false}>
            <DialogTitle>{props.lesson_id===null?"New lesson": props.lesson_title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.lesson_id===null?"Lesson created":"Lesson updated"}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                    <Button onClick={props.closeDialog} color="primary" autoFocus="autoFocus" variant="outlined">
                        OK
                    </Button>
            </DialogActions>
        </Dialog>

    </div>

}

export default LessonForm


