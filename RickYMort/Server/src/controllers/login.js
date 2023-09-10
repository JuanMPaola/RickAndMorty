const users = require ("../utils/users")


const getLogin = (req, res) => {
    const {email, password} = req.query;

    const user = users.find((user) => user.email === email && user.password === password);
    
    const access = user ? true : false;

    res.status(200).json({access});
}

module.exports= {getLogin}