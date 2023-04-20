const axios = require('axios');

const getCharById = (res, id) => {

    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let character = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            staus: data.status
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(character));
    })
    .catch(err => {
            res.writeHead(500, {"Content-Type": "text/plain"})
            .end(`El personaje con id ${id} no fue encontrado`)
        }
    );

}

module.exports = getCharById;