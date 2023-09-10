const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const {id} = req.params;

    axios(URL+id)
    .then(response => response.data)
    .then(({id, status, name, species, origin, image, gender}) => {
        if(id){
            const character = {id, status, name, species, origin, image, gender}
            return res.status(200).json(character);
        }
        else return res.status(404).send({err : "Not found"})
    })
    .catch(err => {
        res.status(500).send({err : err.message});
    })
}

module.exports = {
    getCharById 
};