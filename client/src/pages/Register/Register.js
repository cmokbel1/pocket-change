import { useState } from 'react'
import RegisterForm from "../../components/RegisterForm"
import UserAPI from '../../utils/UserAPI'
import "./Register.css";
import NavBar from '../../components/NavBar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Footer from '../../components/Footer'
import Logo from '../../Assets/small_logo.png'
import Login from '../Login'
import './Register.css'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));




const Register = () => {

  return (
    <>
      <Container className='top'>
        <a href="/"> <img src={Logo} alt="logo"></img></a> 
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={10}>
            <h5 className='title2'>Register Your Account</h5>
            <br></br>
            <RegisterForm />
          </Grid>
          <Grid item xs={0} md={1} >
          </Grid>
        </Grid>
        <br></br><br></br>
      <a href='/login'>Already Have An Account?</a>
      </Container>
            <br></br><br></br>
      <hr className='line'></hr>
      <Footer></Footer>
    </>
  )
}
export default Register