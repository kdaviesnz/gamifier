import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const SigninForm = (props) => {

    return <Card>
        <CardContent>
            <Typography type="headline" component="h2">
                Instructor Sign In
            </Typography>
            <TextField id="email" type="email" label="Email"  value={props.email} onChange={props.handleChange('email')} margin="normal"/><br/>
            <TextField id="password" type="password" label="Password" value={props.password} onChange={props.handleChange('password')} margin="normal"/>
            <br/> {
            props.error && (<Typography component="p" color="error">
                <Icon color="error">error</Icon>
                {props.error}
            </Typography>)
        }
        </CardContent>
        <CardActions>
            <Button color="primary" variant="outlined" onClick={props.clickSubmit}>Submit</Button>
        </CardActions>

        <Typography type="headline" component="h2">
            Don't have an instructor account? Click <a href="/instructorsignup">here</a> to sign up!
        </Typography>

    </Card>
}

export default SigninForm


