import React, {Component} from 'react'
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import {CardActions, CardContent} from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import auth from './../../auth/auth-helper'
import {read} from "../api-user";
console.log('RENDERING /client/users/instructor/Dashboard.js')
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Course from '../Course.js';

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    title: {
        margin: theme.spacing.unit * 2,
        color: theme.palette.protectedTitle
    },
    error: {
        verticalAlign: 'middle'
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

        console.log('instructor id:')
        console.log(this.props.match.params.userId)

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

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h4">
                        Courses
                    </Typography>
                    {
                        this.state.mycourses.map(
                            (course, i) => <Course courseName={course.course.name} lessons={course.lessons} keyID={i} />
                        )
                    }
                </Container>
            </React.Fragment>
        )
    }

}

export default withStyles(styles)(Dashboard)
