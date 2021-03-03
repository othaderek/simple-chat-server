const express = require('express');
const http = require('http')
const app = express();
const socketIO = require("socket.io");
const port = 5000;
const server = http.createServer(app);

const io = socketIO(server, {
    cors: {
      origin: "http://localhost:8080",
      credentials: true
    },
    allowEIO3: true
});

app.get('/', (req, res) => {
    let hello = {
        message: "Hello. Welcome to the main endpoint."
    };
    res.send(hello);
    console.log("Someone sent a GET request to /");
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
  
server.listen(port, () => {
    console.log(`listening on *:${port}`);
});