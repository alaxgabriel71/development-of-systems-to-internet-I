import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have initialized a WebSocket connection and stored it in a variable called 'socket'
    // Send the message to the server via WebSocket
    socket.send(JSON.stringify({ name, email }));
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={handleNameChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormPage;