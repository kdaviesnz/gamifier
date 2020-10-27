
// Routes are defined in server/routes/instructor.routes.js
const create = (user) => {
    return fetch('/api/instructor/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}

const list = () => {
    return fetch('/api/instructor/', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const read = (params, credentials) => {
    return fetch('/api/instructor/' + params.userId, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}


const update = (params, credentials, user) => {
    return fetch('/api/instructor/' + params.userId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(user)
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

const remove = (params, credentials) => {
    return fetch('/api/instructor/' + params.userId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    }).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

export { create, list, read, update, remove }
