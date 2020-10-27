console.log("RENDERING server/models/instructor.model.js")

class Instructor {

    constructor(params, db) {
        console.log(db)
        //this.db = db
        this.state = {
            'first_name':params.first_name,
            'last_name':params.last_name,
            'email':params.email,
            'password':params.password
        }
    }

    create(res, db) {

        console.log('state:')
        console.log(this.state)

        db.collection("instructor").insertOne(this.state, (err, result) => {
            if (err) {
                res.json({
                    'error':err
                })
            } else {
                res.json({
                    'status':201,
                    'message': 'Instructor created'
                })
            }
        })
    }


}

module.exports = Instructor