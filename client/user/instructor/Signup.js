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
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SignupForm from "../../user/instructor/SignupForm"

class Signup extends Component {

    constructor(props) {
        super()
        this.state = {
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
        return <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box>
                    <SignupForm open_dialog={this.state.open} error={this.state.error} clickSubmit={this.clickSubmit} user_name={this.state.name} email={this.state.email} handleChange={this.handleChange} password={this.state.password}/>
                </Box>
            </Container>
        </React.Fragment>
    }
}

export default Signup