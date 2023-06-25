/* import React, { useState, useEffect } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3000');

    newSocket.onopen = () => {
      console.log('Conexão estabelecida');
    };

    newSocket.onmessage = (message) => {
      const receivedMessage = JSON.parse(message.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    newSocket.onclose = () => {
      console.log('Conexão fechada');
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && inputValue) {
      const newMessage = {
        content: inputValue,
        timestamp: new Date().toISOString(),
      };

      socket.send(JSON.stringify(newMessage));
      setInputValue('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <span>{message.timestamp}</span>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Chat; */

import React, { useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000', {
      withCredentials: true, // Permitir envio de cookies (se necessário)
      extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:3000', // URL do servidor Socket.IO
      },
    });

    socket.on('connect', () => {
      console.log('Conexão estabelecida com o servidor Socket.IO');

      // Enviar mensagem para o servidor (opcional)
      socket.emit('mensagem', 'Olá, servidor!');
    });

    socket.on('resposta', (mensagem) => {
      console.log('Resposta do servidor:', mensagem);
      // Lógica adicional para processar a resposta do servidor
    });

    socket.on('disconnect', () => {
      console.log('Desconectado do servidor Socket.IO');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Componente do chat */}
      <h1>Chat</h1>
    </div>
  );
};

export default ChatComponent;