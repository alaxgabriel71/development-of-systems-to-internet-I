import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const socket = io('http://localhost:3001');

const ChartsPage = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    socket.on('responsesData', (data) => {
      setResponses(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>Página com gráficos</p>
      <BarChart width={500} height={300} data={responses}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ChartsPage;
