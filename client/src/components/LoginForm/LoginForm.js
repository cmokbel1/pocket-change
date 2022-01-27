import { useState, useContext } from 'react'
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { palette } from '@mui/system';
import './LoginForm.css';

const LoginForm = (props) => {
  const {
    lUsername,
    lPassword,
    handleInputChange,
    handleLoginUser
  } = useContext(AuthContext)

  return (
    <Container row>
      <TextField
        label="Required Username" 
        color="primary" 
        focused
        sx={{ input: { color: 'white' } }}
        required
        id="filled-required"
        defaultValue="Username"
        
      />
      <TextField
        label="Required Email"
        color="primary"
        focused
        sx={{ input: { color: 'white' } }}
        required
        id="filled-required"
        defaultValue="Email"
      />
      <TextField
        id="filled-required"
        label="Required Password"
        type="password"
        autoComplete="current-password"
        color="primary"
        focused
      />
    </Container>
  );
};

export default LoginForm
