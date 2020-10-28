import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import auth from './../../auth/auth-helper'
import {Redirect} from 'react-router-dom'
import {signin} from './../api-auth.js'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
})

class Signin extends Component {

    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            redirectToDashboard: false,
            dashboard: '/instructor/dashboard'
        }
    }

    clickSubmit = () => {

        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        fetch('/api/instructor/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data)
            if (data.error) {
                this.setState({error: data.error})
            } else {
                auth.authenticate(data, () => {
                    this.setState({redirectToDashboard: true, dashboard: "/instructor/dashboard/"+data.instructor._id})
                })
            }
        }).catch((err) => console.log(err))

    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    render() {
        const {classes} = this.props

        const {redirectToDashboard} = this.state
        if (redirectToDashboard) {
            return (<Redirect to={this.state.dashboard}/>)
        }

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Instructor Sign In
                    </Typography>
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
                    <br/> {
                    this.state.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {this.state.error}
                    </Typography>)
                }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="outlined" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>

                <Typography type="headline" component="h2" className={classes.title}>
                    Don't have an instructor account? Click <a href="/instructorsignup">here</a> to sign up!
                </Typography>

            </Card>

        )
    }
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signin)