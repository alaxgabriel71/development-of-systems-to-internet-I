import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import NavBar from '../components/NavBar';
import QuestionCard from '../components/QuestionCard';
//import { io } from 'socket.io-client';

//const socket = io('http://localhost:3001');

const questions = ['Pergunta 1', 'Pergunta 2'];
const answers = ['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4', 'Resposta 5'];

const QuestionsPage = ({ socket, name, email }) => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  //console.log(socket);

  const handleRadioChange = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    console.log(updatedAnswers);
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmitAnswers = () => {
    // Enviar respostas para o servidor via WebSocket
    socket.emit('submitAnswers', selectedAnswers);

    navigate('/gráficos');
  };

  return (
    <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
      <NavBar name={name} email={email} />
      <h1>Página com perguntas enumeradas</h1>
      <form /* style={{"margin-top": "50px"}} */>
        {questions.map((question, i) => <QuestionCard key={i} index={i} question={question} answers={answers} handleRadioChange={(index, answer) => handleRadioChange(index, answer)} selectedAnswers={selectedAnswers}/> )}
        {/* <p>Pergunta 1:</p>
        <RadioGroup
          value={selectedAnswers[0] || ''}
          onChange={(e) => handleRadioChange(0, e.target.value)}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Resposta 1"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Resposta 2"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="Resposta 3"
          />
        </RadioGroup>

        <p>Pergunta 2:</p>
        <RadioGroup
          value={selectedAnswers[1] || ''}
          onChange={(e) => handleRadioChange(1, e.target.value)}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Resposta 1"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Resposta 2"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="Resposta 3"
          />
        </RadioGroup>
 */}
        {/* Adicione mais perguntas e respostas conforme necessário */}
      </form>

      <Button onClick={handleSubmitAnswers} color="secondary" variant="contained" >Enviar Respostas</Button>
    </div>
  );
};

export default QuestionsPage;
