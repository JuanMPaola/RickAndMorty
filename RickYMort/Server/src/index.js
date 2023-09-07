const http = require('http')
const data = require('./utils/data')



http
.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').at(-1)

        const personajes = data.find((chara)=> chara.id === +id)

        res.writeHead(200, {"Content-Type":"application/json"})
        return res.end(JSON.stringify(personajes))
    }

})
.listen(3001, 'localhost' )