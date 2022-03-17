import * as React from 'react';

import Footer from '../../components/Footer'
import Logo from '../../Assets/Pocket_Change_logo_2.0.png'
import './Home.css'


import { Container, Paper, Grid, styled, Button } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));


const Home = () => {
  return (
    <>
      <br></br>
          <Grid item xs={12} md={12}> 
            <div className='paper'>
              <img className='pic' src={Logo} alt='stonkMeme'></img>
            </div>
          </Grid>
      <br></br><br></br><br></br>
      <Container className='top'>
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className='paper'>
              <br></br>
              <h1>You Know Where Your Money Is Spent.</h1>
              <br></br>
              <h4>Login, Categorize, and Budget.</h4>
              <br></br>
              <Button className='continue' variant="contained" color="success" onClick={(e) => {
                e.preventDefault();
                window.location = '/Register';
              }}>
              Get Started
              </Button>
              <br /><br />
              <Button className='continue' variant="contained" color="success" onClick={(e) => {
                e.preventDefault();
                window.location = '/Login';
              }}>
                Login
              </Button>
              </div>
          </Grid>
          <Grid item xs={0} md={1} >
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
