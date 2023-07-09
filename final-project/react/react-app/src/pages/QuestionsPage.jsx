import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import NavBar from '../components/NavBar';
import QuestionCard from '../components/QuestionCard';
import api from '../services/api';

const questions = ['Pergunta 1', 'Pergunta 2'];
const answers = ['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4', 'Resposta 5'];

const QuestionsPage = ({ name, email }) => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);


  const handleRadioChange = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    console.log(updatedAnswers);
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmitAnswers = () => {
    api.post("/answers", { selectedAnswers })
      .then(() => navigate('/gráficos'));
  };

  return (
    <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
      <NavBar name={name} email={email} />
      <h1>Página com perguntas enumeradas</h1>
      <form>
        {questions.map((question, i) => <QuestionCard key={i} index={i} question={question} answers={answers} handleRadioChange={(index, answer) => handleRadioChange(index, answer)} selectedAnswers={selectedAnswers}/> )}
      </form>

      <Button onClick={handleSubmitAnswers} color="secondary" variant="contained" >Enviar Respostas</Button>
    </div>
  );
};

export default QuestionsPage;
