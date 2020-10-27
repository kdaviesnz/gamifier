console.log("RENDERING server/server.js")

import config from './../config/config'
import app from './express'


const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
require("dotenv").config()
// Database Connection URL
const uri = "mongodb+srv://" + process.env.MONGODBUSER + ":" + process.env.MONGODBPASSWORD + "@cluster0.awqh6.mongodb.net/gamifier?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoClient.connect(err => {
    assert.equal(err, null);
    const collections = mongoClient.db('gamifier')
    console.log("Connected successfully to mongodb server")  
    
    app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
    })
})




