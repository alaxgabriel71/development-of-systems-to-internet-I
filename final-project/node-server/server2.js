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

var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,POST,DELETE",
  headers: "Origin, Authorization, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers"  
}

app.use(cors(corsOptions));

app.use(express.json());

let clientsCount = 0;
let result = [];

io.on('connection', (socket) => {
  clientsCount++;
  //console.log('client connected. (' + clientsCount + ')');
  io.emit('clientsCount', clientsCount/2);

  socket.on('submitForm', (data) => {
    console.log('Dados do formulário:', data);
    //socket.data.username = data.name
    //console.log('==========>', socket)
    //io.emit('socketUpdate', socket);
    // console.log(socket.data.username)
    //socket.data.username = data.name;
  });

  socket.on('submitAnswers', (answers) => {
    // console.log('Respostas de ' + socket.data.username + ':', answers);
    result.push(answers);
    console.log('respostas', result);
    //socket.broadcast.emit('responsesData', { name: socket.id, count: answers.length });
    io.emit('responsesData', "mudou");
  });

  socket.on('disconnect', () => {
    clientsCount--;
    io.emit('clientsCount', clientsCount/2);
    console.log('client disconnected');
  });
});

app.get("/result", (req, res) => {
  return res.status(200).json({ result });
});

server.listen(3001, () => {
  console.log('Servidor WebSocket iniciado na porta 3001');
});