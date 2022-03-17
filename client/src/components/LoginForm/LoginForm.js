import { useState } from 'react'

import UserAPI from '../../utils/UserAPI'
import './LoginForm.css';

import { TextField, Container, Grid, Button } from '@mui/material';


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
        window.location = '/create'
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
        style={{ backgroundColor: 'white' }}
        id="outlined-basic" variant="outlined"
        required
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
        style={{ backgroundColor: 'white' }}
        id="outlined-basic" variant="outlined"
        type="password"
        autoComplete="current-password"
        value={loginState.lPassword}
        onChange={handleInputChange}
        name="lPassword"
      />
        <Grid item xs={0} md={1}>
        </Grid>
        </Grid>
      </Grid>
      <br></br>
      <Button className='continue' variant="contained" color="success" onClick={handleLoginUser}>Submit</Button>
    </Container>
  );
};

export default LoginForm
