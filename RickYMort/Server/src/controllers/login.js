/* const users = require ("../utils/users")


const getLogin = (req, res) => {
    const {email, password} = req.query;

    const user = users.find((user) => user.email === email && user.password === password);
    
    const access = user ? true : false;

    res.status(200).json({access});
}

module.exports= {getLogin} */

const { User } = require("../models/User")

const login = async (req, res,) => {
    try {
        const {email, password} = req.query;

        if(!email || !password) return res.status(400).send("Faltan datos")

        const user = await User.findOne({ where: { email } });

        if (!user) res.status(404).send( "Usuario no encontrado");

        if (user.password !== password) res.status(403).send("Contraseña incorrecta")

        res.status(200).json({ access: true })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { login };