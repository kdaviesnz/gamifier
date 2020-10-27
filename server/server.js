console.log("RENDERING server/server.js")

// import config from './../config/config'
// import app from './express'
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
require("dotenv").config()

// Database Connection URL
const uri = "mongodb+srv://" + process.env.MONGODBUSER + ":" + process.env.MONGODBPASSWORD + "@cluster0.awqh6.mongodb.net/" + process.env.MONGODB + "?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(err => {
    assert.equal(err, null);
    const collections = mongoClient.db(process.env.MONGODB)
    console.log("Connected successfully to mongodb server")
    const app = require('./express')(collections)
    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log(err)
        }
        console.info('Server started on port %s.', process.env.PORT)
    })
})