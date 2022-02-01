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
import Grid from '@mui/material/Grid';
//import './LoginForm.css';

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
        window.location = '/budget'
      })
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          <h5 className='tags'> Username </h5>
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
      <Grid item xs={0} md={1}>
      </Grid>
    </Grid>
      </Grid>

      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          <h5 className='tags'> Password </h5>    

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
        <Grid item xs={0} md={1}>
        </Grid>
        </Grid>
      </Grid>
      <br></br>
      <Button variant="contained" color="success" onClick={handleLoginUser}>Submit</Button>
    </Container>
  );
};

export default LoginForm
