let myFavorites = [];

const postFav = (req,res) => {
    let character = req.body;
    myFavorites.push(character);
    res.status(200).json(myFavorites);
}

const deleteFav = (req,res) => {
    let {id}  = req.params;
    myFavorites = myFavorites.filter((favoritos)=> favoritos.id !== Number(id))
    res.status(200).json(myFavorites);
}

module.exports = {postFav, deleteFav}