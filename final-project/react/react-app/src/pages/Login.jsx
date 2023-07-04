import React, { useState } from 'react';
import io from 'socket.io-client';
import { Button, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

// const socket = io('http://localhost:3001');

const Login = ({ socket, setSocket }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [clientsCount, setClientsCount] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    //const [socket, setSocket] = useState(null)
    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // Enviar dados para o servidor
        const aux = await io.connect('http://localhost:3001');
        console.log(aux);
        setSocket(aux);
        aux.emit('submitForm', { name, email });

        setSubmitted(true);
        navigate("/home");
    };

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
            <Button type="submit" variant="contained" color="secondary">Prosseguir</Button>
        </form>
    );
};

export default Login;
