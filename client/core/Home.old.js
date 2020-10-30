console.log("RENDERING client/core/Home.js")

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card, {CardContent, CardMedia} from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing.unit * 5
    },
    title: {
        padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px 
    ${theme.spacing.unit * 2}px`,
        color: theme.palette.text.secondary
    },
    media: {
        minHeight: 330
    }
})


class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div>
                Welcome to the Mern Skeleton home page
            </div>
        )
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

console.log("LOADED client/core/Home.js")