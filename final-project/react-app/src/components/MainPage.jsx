import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Button, TextField } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuestionsPage from './QuestionsPage';
import ChartsPage from './ChartsPage';

const socket = io('http://localhost:3001');

const MainPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clientsCount, setClientsCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    socket.on('clientsCount', (count) => {
      setClientsCount(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Enviar dados para o servidor
    socket.emit('submitForm', { name, email });

    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmitForm}>
          <TextField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Button type="submit">Prosseguir</Button>
        </form>
      ) : (
        <div>
          <Router>
            <Switch>
              <Route exact path="/">
                <Link to="/questions">
                  <Button>Perguntas Enumeradas</Button>
                </Link>
              </Route>
              <Route path="/questions" component={QuestionsPage} />
              <Route path="/charts" component={ChartsPage} />
            </Switch>
          </Router>
        </div>
      )}

      <p>Clientes conectados: {clientsCount}</p>
    </div>
  );
};

export default MainPage;
