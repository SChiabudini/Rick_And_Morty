const http = require('http');
const getCharById = require('./controllers/getCharById');
const { get } = require('https');
// const characters = require('./utils/data');

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

//    if( req.url.includes('rickandmorty/character') ){
//         let id = req.url.split('/').at(-1);

//         //esta opción devuelve un arreglo con el objeto único
//         //let characterFilter = characters.filter(char => char.id === Number(id));
        
//         //esta opción devuelve un objeto directamente
//         let characterFilter = characters.find(char => char.id === Number(id));

//         res
//             .writeHead(200, {"Content-Type": "application/json"})
//             .end(JSON.stringify(characterFilter));
//    }

    if (req.url.includes('/rickandmorty/character')){
        let id = req.url.split('/').at(-1);

        getCharById(res, id)
    }

})
.listen(3001, 'localhost')