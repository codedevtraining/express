const express = require('express')
const server = express()

server.get('/', function(req, res) {
    res.send('<h1>get</h1>')
})

server.post('/', function(req, res) {
    res.send('<h1>post</h1>')
})

server.put('/', function(req, res) {
    res.send('<h1>put</h1>')
})

server.delete('/', function(req, res) {
    res.send('<h1>delete</h1>')
})

server.listen(3000, () => console.log('Running...'))