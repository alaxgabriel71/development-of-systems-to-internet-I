const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        allowedHeaders: ["Access-Control-Allow-Origin"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('Um cliente se conectou');

    socket.on('message', (message) => {
        console.log('Mensagem recebida:', message);
        io.emit('message', message); // Envia a mensagem para todos os clientes conectados
    });

    socket.on('disconnect', () => {
        console.log('Um cliente se desconectou');
    });
});

server.listen(3000, () => {
    console.log('Servidor Socket.IO iniciado na porta 3000');
});
