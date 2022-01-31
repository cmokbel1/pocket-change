import NavBar from '../../components/NavBar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Home.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Footer from '../../components/Footer'
import Logo from '../../Assets/Pocket_Change_logo_02.png'
import Login from '../Login'
import Register from '../Register'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));


const Home = () => {
  return (
    <>
      <h1 className='title'>Welcome To Pocket Change</h1>
      <br></br>
      <br></br>
      <Container className='top'>
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='paper'>
              <br></br>
              <h1>You Know Where Your Money Is Spent.</h1>
              <br></br>
              <h4>Login, Categorize, and Budget.</h4>
              <br></br>
              <a href="/Register" > <Button variant="contained" color="success">
              Get Started
              </Button></a>
              </div>
          </Grid>
          <Grid item xs={0} md={1} >
          </Grid>
          <Grid item xs={12} md={4}> 
            <div className='paper'>
              <img className='pic' src={Logo} alt='stonkMeme'></img>
            </div>
          </Grid>
        </Grid>
    </Container>
      <br></br>   <br></br>
    <Container className='bottom' maxWidth="xl">
        <Grid container spacing={2}>

          <Grid item xs={0} md={2}>
          </Grid>
          <Grid item xs={12} md={8} >
            <div className='paper'>
            <h3>Easy</h3>
            <p> You can Keep track of your spending without doing any calculation. </p>
            <hr></hr>
            <h3>Smart</h3>
            <p> Everything will be calculated with different charts. </p>
            <hr></hr>
            <h3>Trusted</h3>
            <p> Your information will never be leaked, we will never share it to anyone else.</p>
          </div>
          </Grid>
        </Grid>
          <Grid item xs={0} md={2} >
          </Grid>
    </Container>
    <br></br>
      <hr className='line'></hr> 
    <Footer></Footer>
    </>
  )
}

export default Home
