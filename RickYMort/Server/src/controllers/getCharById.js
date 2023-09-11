const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res)=>{
    try {
        const {id} = req.params;
        const {data} = await axios(`${URL}/${id}`)
        const {status, name, species, origin, image, gender} = data;
        if(name){
            return res.status(200).json({id, status, name, species, origin, image, gender} )
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

/* const getCharById = (req, res) => {
    const {id} = req.params;

    axios(URL+id)
    .then(response => response.data)
    .then(({id, status, name, species, origin, image, gender}) => {
        if(id){
            const character = {id, status, name, species, origin, image, gender}
            return res.status(200).json(character);
        }
        else return res.status(404).send("Not found")
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    })
}*/

module.exports = {
    getCharById 
};