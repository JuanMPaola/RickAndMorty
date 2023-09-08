const http = require("http");
const {getCharById} = require("./controllers/getCharById")

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop()
        
        getCharById(res, Number(id))
    }
    
}).listen(3001, "localhost");