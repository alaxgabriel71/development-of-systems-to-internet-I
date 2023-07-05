import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import NavBar from '../components/NavBar';

const HomePage = ({ socket, setSocket, name, email }) => {
    const [clientsCount, setClientsCount] = useState(0);
    
    useEffect(() => {
        socket.on('clientsCount', (count) => {
            setClientsCount(count);
        });

        socket.on('socketUpdate', (newSocket) => {
            setSocket(newSocket);
            console.log(newSocket)
        });

        /* return () => {
            socket.disconnect();
        }; */
        return () => socket.off('clientsCount')
    }, [socket]);

    return (
        <div>
            <NavBar name={name} email={email} />
            <h1>Bem-vindo à Página Inicial</h1>
            <p>Este é um aplicativo de pesquisa em tempo real.</p>
            <Button component={Link} to="/formulário" variant="outlined" color="secondary">
                Começar
            </Button>
        </div>
    );
};

export default HomePage;
