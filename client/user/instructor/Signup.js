import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import {create} from './../instructor/api-user.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'



class Signup extends Component {

    constructor(props) {
        super()
        state = {
            name: '',
            password: '',
            email: '',
            open: false,
            error: ''
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {

        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        return fetch('/api/instructors', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data)
            if (data.status !== 201) {
                alert(data.error)
            } else {
                this.setState({open:true})
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    render() {
        const {classes} = this.props
        return (<div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Instructor Sign Up
                    </Typography>
                    <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
                    <br/> {
                    this.state.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {this.state.error}</Typography>)
                }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="outlined" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
            <Dialog open={this.state.open} disableBackdropClick={true}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New account successfully created.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/instructorsignin">
                        <Button color="primary" autoFocus="autoFocus" variant="outlined">
                            Sign In
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>)
    }
}

export default Signup