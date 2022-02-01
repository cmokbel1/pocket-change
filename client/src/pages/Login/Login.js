import LoginForm from "../../components/LoginForm"
import "./Login.css";
import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import NavBar from '../../components/NavBar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Footer from '../../components/Footer'
import Logo from '../../Assets/small_logo.png'
import Register from '../Register'
import Home from '../../pages/Home'
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
