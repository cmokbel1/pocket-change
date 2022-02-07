import * as React from 'react';

import Footer from '../../components/Footer';
import Logo from '../../Assets/small_logo.png';
import LoginForm from "../../components/LoginForm";
import "./Login.css";

import { Container, Grid } from '@mui/material';



const Login = () => {
  return (
    <>
      <Container className='top'>
        <a href="/"> <img src={Logo} alt="logo"></img></a> 
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={10}>
            <h5 className='title2'>Login To Your Account</h5>
            <br></br>
            <LoginForm />
          </Grid>
          <Grid item xs={0} md={1} >
          </Grid>
        </Grid>
      <br></br>
      <a href='/Register'>Don't Have An Account?</a>
      </Container>
      <br></br><br></br>
      <hr className='line'></hr>
      <Footer></Footer>
    </>
  )
}

export default Login
