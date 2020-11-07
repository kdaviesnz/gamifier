import React, {Component} from 'react'
import auth from './../../auth/auth-helper'
import {Redirect} from 'react-router-dom'
import SigninForm from "./SigninForm";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";


class Signin extends Component {

    constructor(props) {
        super()
        this.props = props
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
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box>
                        <SigninForm error={this.state.error} clickSubmit={this.clickSubmit} email={this.state.email} handleChange={this.handleChange} password={this.state.password}/>
                    </Box>
                </Container>
            </React.Fragment>
        )

    }
}


export default Signin