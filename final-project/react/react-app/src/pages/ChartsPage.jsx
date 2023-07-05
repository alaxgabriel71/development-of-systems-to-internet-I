import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import io from 'socket.io-client';
import api from '../services/api';
import NavBar from '../components/NavBar';

const socket = io('http://localhost:3001');

const ChartsPage = ({ name, email }) => {
  const [result, setResult] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api.get("/result")
      .then(({ data }) => setResult(data.result))
      .catch(err => console.error(err))

  }, [refresh, socket])

  useEffect(() => {
    socket.on('responsesData', (data) => {
      setRefresh(!refresh);
      console.log(data);
    });
    
    /* return () => {
      socket.disconnect();
    }; */
  }, [socket]);


  // Contabilizar as respostas para as perguntas 1 e 2
  const countAnswers = (questionIndex) => {
    const answers = {};
    result.forEach((response) => {
      const answer = response[questionIndex];
      if (answers[answer]) {
        answers[answer] += 1;
      } else {
        answers[answer] = 1;
      }
    });
    return answers;
  };

  const question1Answers = countAnswers(0);
  const question2Answers = countAnswers(1);

  // Converter as respostas em um array de dados para o Recharts
  const formatData = (answers) => {
    return Object.keys(answers).map((answer) => ({
      name: `Resposta ${answer}`,
      value: answers[answer],
    }));
  };

  const question1Data = formatData(question1Answers);
  const question2Data = formatData(question2Answers);

  // Cores para os segmentos do gráfico
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
      <NavBar name={name} email={email} />
      <h1>Resultado da Pesquisa</h1>
      <h2>Pergunta 1</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={question1Data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          labelLine={true}
          label={{ renderCustomizedLabel }}
        >
          {question1Data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>

      <h2>Pergunta 2</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={question2Data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          labelLine={true}
          label={{ renderCustomizedLabel }}
        >
          {question2Data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );

};

export default ChartsPage;
