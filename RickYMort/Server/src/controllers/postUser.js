import {User} from "../DB_connection";

const postUser = async(req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({message: "Faltan datos"})
    }
    const usuario = {email, password}; 
    try {
        await User.findOrCreate(usuario)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postUser;