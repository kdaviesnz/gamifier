import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import auth from './../../auth/auth-helper'
import CoursesEditable from "./Courses"
import Box from "@material-ui/core/Box/Box";

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

        if (jwt === false) {
            console.log('Not logged in as an instructor')
        } else {

            console.log(jwt)
            fetch('/api/instructor/' + jwt.instructor._id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt.token
                }
            }).then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
                this.setState({instructor: data})
                this.loadCourses(jwt.instructor._id)
            }).catch((err) => console.log(err))
        }
    }

    render () {

        // http://localhost:3000/instructor/dashboard/5f98eac6cab9c9c4fa4d807b

        return (

            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box>
                        <CoursesEditable classes={this.props.classes} courses={this.state.mycourses} />
                    </Box>
                </Container>
            </React.Fragment>
        )
    }

}

export default Dashboard
