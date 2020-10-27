const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
require("dotenv").config()

const uri = "mongodb+srv://" + process.env.MONGODBUSER + ":" + process.env.MONGODBPASSWORD + "@cluster0.awqh6.mongodb.net/gamifier?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(err => {
    assert.equal(err, null);
    const collections = mongoClient.db('gamifier')
    console.log("Connected successfully to mongodb server")
    collections.collection("instructors").insertOne({'id':'testing'}, (err, result) => {
        if (err) {
            console.log({
                'error':err
            })
        } else {
            console.log({
                'status':201,
                'message': 'Instructor created'
            })
        }
        process.exit()
    })
})