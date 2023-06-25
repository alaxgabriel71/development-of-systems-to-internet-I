import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const QuestionsPage = () => {
  const history = useHistory();
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleRadioChange = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmitAnswers = () => {
    // Enviar respostas para o servidor
    socket.emit('submitAnswers', selectedAnswers);

    history.push('/charts');
  };

  return (
    <div>
      <p>Página com perguntas enumeradas</p>
      <form>
        <p>Pergunta 1:</p>
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

        {/* Adicione mais perguntas e respostas conforme necessário */}
      </form>

      <Button onClick={handleSubmitAnswers}>Enviar Respostas</Button>
    </div>
  );
};

export default QuestionsPage;
