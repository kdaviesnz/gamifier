import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import InstructorSignup from './user/instructor/Signup'
import StudentSignup from './user/student/Signup'
import Signin from './auth/Signin'
import InstructorSignin from './auth/instructor/Signin'
import StudentSignin from './auth/student/Signin'
import EditProfile from './user/EditProfile'
import InstructorDashboard from './user/instructor/Dashboard'
import LessonEditable from './user/instructor/Lesson'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import InstructorMenu from './user/instructor/Menu'
import auth from './auth/auth-helper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    main: {
    }
}));


const MainRouter = (props) => {

    const classes = useStyles();

    return (<div>
        {
            (auth.isAuthenticated() ? <InstructorMenu/> :
                <Menu/>)
        }
        <Switch>
            <Route exact path="/" render={(props) => (
                <Home {...props} classes={classes} />
            )} />
            <Route path="/users" component={Users}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/instructorsignin" render={(props) => (
                <InstructorSignin {...props} classes={classes} />
            )}/>
            <Route path="/studentsignin" component={StudentSignin}/>
            <Route path="/instructorsignup" component={InstructorSignup}/>
            <Route path="/studentsignup" component={StudentSignup}/>
            <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
            <PrivateRoute path="/instructor/dashboard/:userId" component={InstructorDashboard} classes={classes}/>
            <PrivateRoute path="/instructor/lessons/:lessonId" component={LessonEditable} classes={classes} />
            <Route path="/user/:userId" component={Profile}/>
        </Switch>
    </div>)

}

export default MainRouter