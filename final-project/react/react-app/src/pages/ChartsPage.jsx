import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import io from 'socket.io-client';
import api from '../services/api';

const socket = io('http://localhost:3001');

const ChartsPage = () => {
  const [responses, setResponses] = useState([]);
  const [result, setResult] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    socket.on('responsesData', (data) => {
      setResponses(data);
      setRefresh(!refresh);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    api.get("/result")
      .then(({ data }) => setResult(data.result))
      .catch(err => console.error(err))

  }, [refresh])

  // Função para contar as respostas e formatar os dados para o gráfico
  const countAnswers = (questionIndex) => {
    const counts = {};

    // Criando um array de cores para cada alternativa
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff6e63', '#a3a1fb'];

    result.forEach((item) => {
      const answer = item[questionIndex];
      counts[answer] = (counts[answer] || 0) + 1;
    });

    // Formata os dados para o formato esperado pelo Recharts
    return Object.keys(counts).map((answer, index) => ({
      name: `Alternativa ${answer}`,
      value: counts[answer],
      color: colors[index % colors.length], // Selecionando a cor com base no índice
    }));
  };

  return (
    <div>
      <h1>Gráficos de Pizza</h1>
      <div>
        <h2>Questão 1</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={countAnswers(0)}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {countAnswers(0).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChart>
      </div>

      <div>
        <h2>Questão 2</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={countAnswers(1)}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {countAnswers(1).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChart>
      </div>
    </div>
  );
};

export default ChartsPage;
