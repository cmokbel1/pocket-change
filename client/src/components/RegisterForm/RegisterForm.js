import { useState } from 'react'

import UserAPI from '../../utils/UserAPI'
import './RegisterForm.css';

import { TextField, Container, Button, Grid } from '@mui/material';

const RegisterForm = (props) => {
  const [registerState, setRegisterState] = useState({
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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={10}> 
      <h5 className='tags'> Username </h5>

      <TextField
        id="outlined-basic" variant="outlined"
        color="primary"
            sx={{ input: { color: 'black', backgroundColor: 'white'} }}
        required
        defaultValue="Username"
        value={registerState.rUsername}
        onChange={handleInputChange}
        name="rUsername"
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
          <h5 className='tags'> Email </h5>

      <TextField
        id="outlined-basic" variant="outlined"
        color="primary"
        sx={{ input: { color: 'black', backgroundColor: 'white' } }}
        required
        defaultValue="Email"
        value={registerState.rEmail}
        onChange={handleInputChange}
        name="rEmail"
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
        style={{ backgroundColor: 'white'}}
        id="outlined-basic" variant="outlined"
        type="password"
        autoComplete="current-password"
        color="primary"
        value={registerState.rPassword}
        onChange={handleInputChange}
        name="rPassword"
      />
        <Grid item xs={0} md={1}>
        </Grid>
        </Grid>
      </Grid>
      <br></br>
      <Button className='continue' variant="contained" color="success" onClick={handleRegisterUser}>Submit</Button>
    </Container>
  );
};

export default RegisterForm
