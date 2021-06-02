const http = require("http");
const port = 8000;


const server =http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if(req.method === 'GET' && req.url === '/todo')
    res.end(`
[
    {
        "id": 1,
        "task": "Zrobic obiad",
        "complete": "NO",
        "actualTime" "2021-05-31, 20:52:00",
        "list": {
            "id": 2
        }
    },
    {
        "id": 2,
        "task": "Zrobic kolacje",
        "complete": "NO",
        "actualTime" "2021-05-31, 23:58:32",
        "list": {
            "id": 2
        }
    },
    {
        "id": 3,
        "task": "Zrobic sniadanie",
        "complete": "NO",
        "actualTime" "2021-05-31, 12:22:19",
        "list": {
            "id": 2
        }
    }
]
    `)
})

server.listen(port)
console.log(`Server is listening on port ${port}`)


