const axios = require('axios')
const {response} = require('express')

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
 axios(URL `${req.params.id}`)
 .then((response))
}

module.exports = {
   getCharById
}