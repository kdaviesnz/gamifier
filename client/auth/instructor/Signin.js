import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import {withStyles} from '@material-ui/core/styles'
import auth from './../../auth/auth-helper'
import {Redirect} from 'react-router-dom'


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

        console.log('clickSubmit()')

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
                console.log(data)
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

        const {redirectToDashboard} = this.state
        if (redirectToDashboard) {
            return (<Redirect to={this.state.dashboard}/>)
        }

        return (
            <Card>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Instructor Sign In
                    </Typography>
                    <TextField id="email" type="email" label="Email"  value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
                    <br/> {
                    this.state.error && (<Typography component="p" color="error">
                        <Icon color="error">error</Icon>
                        {this.state.error}
                    </Typography>)
                }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="outlined" onClick={this.clickSubmit}>Submit</Button>
                </CardActions>

                <Typography type="headline" component="h2">
                    Don't have an instructor account? Click <a href="/instructorsignup">here</a> to sign up!
                </Typography>

            </Card>

        )
    }
}


export default Signin