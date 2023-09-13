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


module.exports = {
    getCharById 
};