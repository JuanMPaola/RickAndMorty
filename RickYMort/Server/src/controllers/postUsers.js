import User from "../DB_connection";

const postUser = async(req, res) => {
    const {email, password} = req.body;
    if(!email, password || email.trim()===false || password.trim()===false){
        res.status(400).json({message: "Faltan datos"})
    }

}

module.exports = postUser;