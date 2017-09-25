const PORT = process.env.PORT || 8081
const io = require('socket.io')(PORT)

io.on('connection', (socket) => {
    console.log(`${socket.id} joined the server!`)
    socket.on('input', (obj) => {
        console.log(obj)
        socket.emit('game-state', {x: 5, y: 7})
    })
    // socket.broadcast('game-state', {})
    // io.sockets.emit('game-state', {})
})
