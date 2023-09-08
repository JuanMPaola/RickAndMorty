const axios = require('axios')


const getCharById = (res, id) => {
   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
         const { id, name, image, gender, species, status, origin } = response.data;
         res.writeHead((200), { "Content-type": "text/plain" })
            .end(JSON.stringify({ id, name, image, gender, species, status, origin }))
      })
      .catch((error) => res.writeHead(500, { "Content-type": "text/plain" })
         .end(error.message))
}

module.exports = {
   getCharById
}