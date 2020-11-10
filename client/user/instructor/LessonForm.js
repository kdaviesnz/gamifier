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

const LessonForm = (props) => {

    return <div><Card>
        <CardContent>
            <Typography type="headline" component="h2">
                Add / Edit Lesson
            </Typography>
            <TextField id="name" label="Name" value={props.lesson_title} onChange={props.handleChange('lesson_title')} margin="normal"/><br/>
            <TextField id="name" label="Name" value={props.lesson_objectives} onChange={props.handleChange('lesson_objectives')} margin="normal"/><br/>
            <Editor content={props.lesson_content}
                    onChange={props.handleContentChange}/>
        </CardContent>
        <CardActions>
            <Button color="primary" variant="outlined" onClick={props.clickSubmit}>Submit</Button>
        </CardActions>


    </Card>

        <Dialog open={props.open_dialog} disableBackdropClick={true}>
            <DialogTitle>New Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lesson saved
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/instructor/signin">
                    <Button color="primary" autoFocus="autoFocus" variant="outlined">
                        Sign In
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>

    </div>

}

export default LessonForm


