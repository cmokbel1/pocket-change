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
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput';
import { palette } from '@mui/system';
import BasicButton from './../BasicButton'
import Grid from '@mui/material/Grid';
import './RegisterForm.css';

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
      <Button variant="contained" color="success" onClick={handleRegisterUser}>Submit</Button>
    </Container>
  );
};

export default RegisterForm
