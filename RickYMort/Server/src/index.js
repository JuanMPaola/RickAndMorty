const http = requiere('http')
const data = requiere("./utils/data");


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")) {

        const id = req.url.split('/')
        id = id.pop()
        const character = data.forEach(element => (element.id == id))

        res.writeHead(200, { "Content-type": "applicatiob/json" })
        return res.end(JSON.stringify(character))

    }
}).listen(3001, "localhost")