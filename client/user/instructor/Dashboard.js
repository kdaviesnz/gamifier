import React, {Component} from 'react'
import {CardActions, CardContent} from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import auth from './../../auth/auth-helper'
import Courses from "../Courses"

class Dashboard extends Component {

    constructor(props) {
        super()

        this.state= {
            'instructor': null,
            'mycourses': []
        }
    }

    loadCourses(instructor_id) {
        fetch('/api/courses/' + instructor_id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data)
            this.setState({mycourses:data.courses})
        }).catch((err) => console.log(err))
    }

    componentDidMount = () => {
        const jwt = auth.isAuthenticated()

        const credentials ={t: jwt.token}

        fetch('/api/instructor/' + this.props.match.params.userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data)
            this.setState({instructor:data})
            this.loadCourses(this.props.match.params.userId)
        }).catch((err) => console.log(err))

    }

    render () {

        // http://localhost:3000/instructor/dashboard/5f98eac6cab9c9c4fa4d807b

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h4">
                        Courses
                    </Typography>
                    <Courses courses={this.state.mycourses} />
                </Container>
            </React.Fragment>
        )
    }

}

export default Dashboard
