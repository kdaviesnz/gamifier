import path from 'path'
import express from 'express'
import { MongoClient } from 'mongodb'
import template from './../template'
//comment out before building for production
import devBundle from './devBundle'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
import StaticRouter from 'react-router-dom/StaticRouter'

import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'
import { indigo, pink } from 'material-ui/colors'


// Install using npm install dotenv
require("dotenv").config()
const assert = require("assert")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// app.use(helmet())
app.use(cors())

//comment out before building for production
devBundle.compile(app)


app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('*', (req, res) => {
    const sheetsRegistry = new SheetsRegistry()
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
        },
    })
    const generateClassName = createGenerateClassName()
    const context = {}
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                    <MainRouter/>
                </MuiThemeProvider>
            </JssProvider>
        </StaticRouter>
    )
    if (context.url) {
        return res.redirect(303, context.url)
    }
    const css = sheetsRegistry.toString()
    res.status(200).send(Template({
        markup: markup,
        css: css
    }))
})


app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message})
    }
})

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// Database Connection URL
const uri = "mongodb+srv://" + process.env.MONGODBUSER + ":" + process.env.MONGODBPASSWORD + "@cluster0.awqh6.mongodb.net/chemistry?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    assert.equal(err, null);
    const db = client.db(process.env.MONGODB)
    console.log("Connected successfully to mongodb server")
})

/*
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// Use connect method to connect to the server
MongoClient.connect(url, (err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})
*/
