/* let myFavorites = [];

const postFav = (req, res) => {
    let character = req.body;
    myFavorites.push(character);
    res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => Number(favorite.id) !== +id);

    return res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav } */

const {Favorite} = require ("../models/Favorite")

const postFav = async (res, req) =>{
    const {name, origin, status, image, species, gender} = req.body;
    if(!name || !origin || !status || !image || !species || !gender){
       res.status(401).json("Faltan datos")
    }

    let character = {name, origin, status, image, species, gender};

    try {
        Favorite.findOrCreat(character)
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {postFav};