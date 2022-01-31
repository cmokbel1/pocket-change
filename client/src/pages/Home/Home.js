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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));


const Home = () => {
  return (
    <>
      <h1 className='title'>Welcome To Pocket-Change</h1>
      <br></br>
      <Container className='top' maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='paper'>
              <br></br>
              <h1>You Know Where Your Money Is Spent.</h1>
              <br></br>
              <h4>Login, Cartegorize, and Budget.</h4>
              <br></br>
              <Button variant="contained" color="success">
              Get Started
              </Button>
              </div>
          </Grid>
          <Grid item xs={0} md={1} >
          </Grid>
          <Grid item xs={12} md={4}> 
            <div className='paper'>
              <img className='pic' src='https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4b8647a-09e8-4576-95de-e622dcc38d72_1280x720.jpeg' alt='stonkMeme'></img>
            </div>
          </Grid>
        </Grid>
    </Container>
      <br></br>    <br></br>
    <Container className='bottom' maxWidth="xl">
        <Grid container spacing={2}>

          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='paper'>
              <h1>Know Where You Spent!</h1>
              <p>In under 5 mins, you will find out your budget and how much did you spend throughout the month.</p>
            </div>
          </Grid>
          <Grid item xs={0} md={1} >
          </Grid>
          <Grid item xs={12} md={4} >
            <Item className='paper'>
            <h3>Easy</h3>
            <p> You can Keep track of your spending without doing any calculation. </p>
            <hr></hr>
            <h3>Smart</h3>
            <p> Everything will be calculated with different charts. </p>
            <hr></hr>
            <h3>Trusted</h3>
            <p> Your information will never be leaked, we will never share it to anyone else.</p>
          </Item>
          </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default Home
