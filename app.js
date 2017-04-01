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

        let reqHeader = JSON.stringify(req.headers, ['host', 'connection', 'accept', 1])
        reqHeader = reqHeader.replace(/\n/gi, '')
                             .replace(/[\"]/g, '')

        let resHeader = res._header
        resHeader = resHeader.replace(/\n/gi, ', ')
                             .replace(/\r/gi, '')
                             .substring(0, resHeader.length - 4)

        let reqObject = {
            'req.url': req.url,
            'req.method': req.method,
            'req.httpVersion': req.httpVersion,
            'req.headers': reqHeader
        }

        let resObject = {
            'res.statusCode': res.statusCode,
            'res.statusMessage': res.statusMessage,
            'res._header': resHeader
        }

        let originalData = data
        let reqReplacer = JSON.stringify(reqObject, null, 2)
        let resReplacer = JSON.stringify(resObject, null, 2)

        let newData = data.replace(/{{ req }}/, reqReplacer)
                          .replace(/{{ res }}/, resReplacer)

        res.end(newData)
    })
})

server.listen(PORT, HOST, () => {
    console.log(`Server is online at port ${PORT}`)
})