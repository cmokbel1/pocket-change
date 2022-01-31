import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button'
import { palette } from '@mui/system';
import BasicButton from './../../components/BasicButton'

const LoginForm = (props) => {
  const [loginState, setLoginState] = useState({
    lUsername: '',
    lPassword: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {setLoginState({ ...loginState, [name]: value })
    console.log(value)
  }

  const handleLoginUser = event => {
    event.preventDefault()
    UserAPI.login({
      username: loginState.lUsername,
      password: loginState.lPassword
    })
      .then(token => {
        localStorage.setItem('user', token)
        setLoginState({ ...loginState, lUsername: '', lPassword: '' })
        window.location = '/'
      })
  }

  return (
    <Container row>
      <TextField
        label="Required Username" 
        color="primary" 
        focused
        // sx={{ input: { color: 'white' } }}
        required
        id="filled-required"
        defaultValue="Username"
        value={loginState.lUsername}
        onChange={handleInputChange}
        name="lUsername"
      />
      <TextField
        id="filled-required"
        label="Required Password"
        type="password"
        autoComplete="current-password"
        color="primary"
        focused
        value={loginState.lPassword}
        onChange={handleInputChange}
        name="lPassword"
      />
      <Button onClick={handleLoginUser}>Submit</Button>
    </Container>
  );
};

export default LoginForm
