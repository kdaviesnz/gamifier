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
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'

class MainRouter extends Component {
    // Removes the server-side injected CSS when React component mounts
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        return (<div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/instructorsignin" component={InstructorSignin}/>
                <Route path="/studentsignin" component={StudentSignin}/>
                <Route path="/instructorsignup" component={InstructorSignup}/>
                <Route path="/studentsignup" component={StudentSignup}/>
                <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
                <Route path="/instructor/dashboard/:userId" component={InstructorDashboard}/>
                <Route path="/user/:userId" component={Profile}/>
            </Switch>
        </div>)
    }
}

export default MainRouter