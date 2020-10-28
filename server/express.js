console.log("RENDERING server/express.js")

import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
//import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import studentAuthRoutes from './routes/student.auth.routes'

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
const StaticRouter = require("react-router-dom").StaticRouter

// @todo
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import { indigo, pink } from '@material-ui/core/colors'
//end

//comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()

const App = (collections) => {
    const app = express()

    //comment out before building for production
    devBundle.compile(app)

    // parse body params and attache them to req.body
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cookieParser())
    app.use(compress())
    // secure apps by setting various HTTP headers
    //app.use(helmet())
    // enable CORS - Cross Origin Resource Sharing
    app.use(cors())

    app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

    // mount routes
    app.use('/', userRoutes)
    app.use('/', authRoutes)

    const instructorAuthRoutes = require('./routes/instructor.auth.routes')(collections.collection("instructors"))
    const studentAuthRoutes = require('./routes/student.auth.routes')(collections.collection("students"))
    const instructorRoutes = require('./routes/instructor.routes')(collections.collection("instructors"))
    const studentRoutes = require('./routes/student.routes')(collections.collection("students"))

    app.use('/', instructorRoutes)
    app.use('/', studentRoutes)
    app.use('/', instructorAuthRoutes)
    app.use('/', studentAuthRoutes)

    app.get('*', (req, res) => {
            console.log('Calling app.get')
            const sheetsRegistry = new SheetsRegistry()
            console.log('Got sheetsRegistry')

            // @see https://material-ui.com/customization/theming/
            const theme = createMuiTheme({
                palette: {
                    primary: {
                        light: '#757de8',
                        main: '#3f51b5',
                        dark: '#002984',
                        contrastText: '#fff',
                    },
                    secondary: {
                        light: '#ff79b0',
                        main: '#ff4081',
                        dark: '#c60055',
                        contrastText: '#000',
                    },
                    openTitle: indigo['400'],
                    protectedTitle: pink['400'],
                    type: 'light'
                }
            })
            console.log("Got theme")

            //const generateClassName = createGenerateClassName()
            // console.log("Got class name: " + generateClassName)
            const context = {
                "muiTheme": theme
            }

            if (context.url) {
                return res.redirect(303, context.url)
            }

            res.status(200).send(Template({}))

            // Catch unauthorised errors
            app.use((err, req, res, next) => {
                if (err.name === 'UnauthorizedError') {
                    res.status(401).json({"error": err.name + ": " + err.message})
                }
            })
        } // app.get
    )

    return app
    
} // const App =

module.exports = App










