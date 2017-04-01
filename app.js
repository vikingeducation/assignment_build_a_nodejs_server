const http = require('http')
const fs = require('fs')

const PORT = 3000
const HOST = 'localhost'

const server = http.createServer((req, res) => {
    fs.readFile('./public/index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end('404 Not Found')
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data)
    })
})

server.listen(PORT, HOST, () => {
    console.log(`Server is online at port ${PORT}`)
})