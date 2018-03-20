/* This script handles all the HTTP calls to the server */

const players = {
    getPlayers: () => fetch('http://localhost:3000/players')
        .then( data => data.json() ),

    getPlayer: (id) => fetch('http://localhost:3000/player/' + id)
        .then( data => data.json() ),

    addPlayer: (name) => fetch('http://localhost:3000/player', {
        method: 'POST', 
        body: JSON.stringify({name: name }),
        headers: new Headers({
            'Content-Type': 'application/json'
            })
        }),

    deletePlayer: (id) => fetch('http://localhost:3000/player/' + id, {
        method: 'DELETE'
    }),

    editPlayer: (id, name) => fetch('http://localhost:3000/player/' + id, {
        method: 'PUT',
        body: JSON.stringify({name: name}),
        headers: new Headers({
            'Content-Type': 'application/json'
            })
    })
}

export default players;