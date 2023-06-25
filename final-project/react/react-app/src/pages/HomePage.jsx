import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const HomePage = ({ socket }) => {
    const [clientsCount, setClientsCount] = useState(0);
    
    useEffect(() => {
        socket.on('clientsCount', (count) => {
            setClientsCount(count);
        });

        /* return () => {
            socket.disconnect();
        }; */
        return () => socket.off('clientsCount')
    }, [socket]);

    return (
        <div>
            <h1>Bem-vindo à Página Inicial</h1>
            <p>Este é um exemplo de aplicativo de pesquisa em tempo real.</p>
            <Button component={Link} to="/questions" variant="contained">
                Começar
            </Button>
            <p>Clientes conectados: {clientsCount}</p>
        </div>
    );
};

export default HomePage;
