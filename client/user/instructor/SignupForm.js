import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Icon from "@material-ui/core/Icon";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {Link} from "react-router-dom";
import Dialog from "@material-ui/core/Dialog/Dialog";

const SignupForm = (props) => {

    return <div><Card>
        <CardContent>
            <Typography type="headline" component="h2">
                Instructor Sign Up
            </Typography>
            <TextField id="name" label="Name" value={props.user_name} onChange={props.handleChange('name')} margin="normal"/><br/>
            <TextField id="email" type="email" label="Email" value={props.email} onChange={props.handleChange('email')} margin="normal"/><br/>
            <TextField id="password" type="password" label="Password" value={props.password} onChange={props.handleChange('password')} margin="normal"/>
            <br/> {
                props.error && (<Typography component="p" color="error">
                    <Icon color="error">error</Icon>
                    {props.error}</Typography>)
            }
        </CardContent>
        <CardActions>
            <Button color="primary" variant="outlined" onClick={props.clickSubmit}>Submit</Button>
        </CardActions>


    </Card>

        <Dialog open={props.open_dialog} disableBackdropClick={true}>
            <DialogTitle>New Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    New account successfully created.
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

export default SignupForm


