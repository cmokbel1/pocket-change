import { useState, useContext } from 'react'
import UserAPI from '../../utils/UserAPI'
// import loginContext from '../../utils/loginContext'
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
import BasicButton from './../BasicButton'
//import './RegisterForm.css';

const RegisterForm = (props) => {
  const [registerState, setRegisterState] = useState({
    rName: '',
    rUsername: '',
    rEmail: '',
    rPassword: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterState({ ...registerState, [name]: value })
    console.log(value)
  }

  const handleRegisterUser = event => {
    event.preventDefault()
    UserAPI.register({
      name: registerState.rName,
      email: registerState.rEmail,
      username: registerState.rUsername,
      password: registerState.rPassword
    })
    .then(() => {
      setRegisterState({ ...registerState, rEmail: '', rUsername: '', rPassword: '' })
      window.location = '/login'
    })
  }


  return (
    <Container row>
      <TextField
        label="Required Name"
        color="primary"
        focused
        sx={{ input: { color: 'white' } }}
        required
        id="filled-required"
        defaultValue="Username"
        value={registerState.rName}
        onChange={handleInputChange}

      />
      <TextField
        label="Required Email"
        color="primary"
        focused
        sx={{ input: { color: 'white' } }}
        required
        id="filled-required"
        defaultValue="Username"
        value={registerState.rEmail}
        onChange={handleInputChange}

      />
      <TextField
        label="Required Username"
        color="primary"
        focused
        sx={{ input: { color: 'white' } }}
        required
        id="filled-required"
        defaultValue="Username"
        value={registerState.rUsername}
        onChange={handleInputChange}

      />
      <TextField
        id="filled-required"
        label="Required Password"
        type="password"
        autoComplete="current-password"
        color="primary"
        focused
        value={registerState.rPassword}
        onChange={handleInputChange}
      />
      <BasicButton onClick={handleRegisterUser}>Submit</BasicButton>
    </Container>
  );
};

export default RegisterForm
