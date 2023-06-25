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

let clientsCount = 0;

io.on('connection', (socket) => {
  clientsCount++;
  console.log('client connected. (' + clientsCount + ')');
  io.emit('clientsCount', clientsCount);

  socket.on('submitForm', (data) => {
    console.log('Dados do formulário:', data);
  });

  socket.on('submitAnswers', (answers) => {
    console.log('Respostas do formulário:', answers);
    socket.broadcast.emit('responsesData', { name: socket.id, count: answers.length });
  });

  socket.on('disconnect', () => {
    clientsCount--;
    io.emit('clientsCount', clientsCount);
    console.log('client disconnected');
  });
});

server.listen(3001, () => {
  console.log('Servidor WebSocket iniciado na porta 3001');
});