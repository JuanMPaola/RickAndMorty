let myFavorites = [];

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

module.exports = { postFav, deleteFav }