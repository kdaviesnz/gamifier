console.log("RENDERING server/models/instructor.model.js")

class Instructor {

    constructor(params, db) {
        this.db = db
        this.state = {
            'first_name':params.first_name,
            'last_name':params.last_name,
            'email':params.email,
            'password':params.password,
        }
    }

    create() {
        db.collection("instructor").insertOne(this.state, (err, result) => {
            if (err) {
                return {
                    'error':err
                }
            } else {
                console.log(result)
                return {
                    'status':201,
                    'message': 'Instructor created'
                }
            }
        })
    }


}

module.exports = Instructor