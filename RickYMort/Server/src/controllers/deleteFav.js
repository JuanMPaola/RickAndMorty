const {Favorite} = require ("../models/Favorite")

const deleteFav = async (req, res, id) =>{
    try {
        const fav = await Favorite.findOne({where: {id}})
        Favorite.destroy(fav);

        let favoritos = Favorite.findAll()
        res.status(200).json(favoritos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {deleteFav}