import { useState, useContext } from 'react'
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import './LoginForm.css';
const LoginForm = () => {
  const {
    lUsername,
    lPassword,
    handleInputChange,
    handleLoginUser
  } = useContext(AuthContext)

  return (
    <Container row>
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Username"
        variant="filled"
      />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Email"
          variant="filled"
        />
      <TextField
        id="filled-password-input"
        label="Required Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
    </Container>
  );
};

export default LoginForm
