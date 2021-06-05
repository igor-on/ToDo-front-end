const http = require("http");
const port = 8000;


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Header', '*')
    res.setHeader('Content-Type', 'application/json')

    if (req.method === 'GET' && req.url === '/tasks') {

        res.end(`[
    {
        "id": 1,
        "task": "Zrobic obiad",
        "complete": "NO",
        "actualTime": "2021-05-31, 20:52:00",
        "list": {
            "id": 1
        }
    },
    {
        "id": 2,
        "task": "Zrobic sniadanie",
        "complete": "NO",
        "actualTime": "2021-05-31, 17:22:12",
        "list": {
            "id": 1
        }
    },
    {
        "id": 3,
        "task": "Zrobic kolacje",
        "complete": "NO",
        "actualTime": "2021-05-31, 22:56:22",
        "list": {
            "id": 1
        }
    }
]`)
    } else if (req.method === 'GET' && req.url === '/lists') {
        res.end(`
[
    {
      "id": 1,
      "listName": "Gotowanie"
    },
    {
        "id": 2,
        "listName": "Sprzątaniegfgdf"
      }
]
    `)
    }
})

server.listen(port)
console.log(`Server is listening on port ${port}`)


