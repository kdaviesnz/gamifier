
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
    if (history.location.pathname == path)
        return {color: '#ff4081'}
    else
        return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => (
    // auth.isAuthenticated()
    <AppBar>
        <Toolbar>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Link to="/instructorsignin">
                <Button style={isActive(history, "/instructorsignin")}>Instructor sign in</Button>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Student sign in</Button>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>About</Button>
            </Link>
        </Toolbar>
    </AppBar>
))

export default Menu

