import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Button, TextField } from '@material-ui/core';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import QuestionsPage from './QuestionsPage';
import ChartsPage from './ChartsPage';

// const socket = io('http://localhost:3001');

const Login = ({ socket, setSocket }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [clientsCount, setClientsCount] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    //const [socket, setSocket] = useState(null)
    const navigate = useNavigate();

    /* useEffect(() => {
        io.on('clientsCount', (count) => {
            setClientsCount(count);
        });

        return () => {
            io.disconnect();
        };
    }, []); */

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // Enviar dados para o servidor
        const aux = await io.connect('http://localhost:3001');
        setSocket(aux);
        aux.emit('submitForm', { name, email });

        setSubmitted(true);
        navigate("/home");
    };

    /* return (
        <div>
            {!submitted ? (
                <form onSubmit={handleSubmitForm}>
                    <h1>Login</h1>
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
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage socket={socket} setSocket={setSocket} />} />
                        <Route path="/questions" element={<QuestionsPage socket={socket} />} />
                        <Route path="/charts" element={<ChartsPage />} />
                    </Routes>
                </BrowserRouter>
            )}

            <p>Clientes conectados: {clientsCount}</p>
        </div>
    ); */

    return (
        <form onSubmit={handleSubmitForm}>
            <h1>Login</h1>
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
    );
};

export default Login;
