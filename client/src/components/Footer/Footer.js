import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import * as React from 'react';
import Login from '../../pages/Login'
import Register from '../../pages/Register'

export default function Footer() {
  return (
    <footer>
      <Box className='boxes'
        px={{ xs: 1, sm: 5 }}
        py={{ xs: 1, sm: 5 }}
        color='white'
      >
        <Container maxWidth='lg'>

          <Box textAlign='center' pt={{ xs: 1, sm: 1 }} pb={{ xs: 1, sm: 0 }}>
            Created By: Claude Mokbel, Jazmine Jose, Malia Pringle, Oliver Hoang, Rachel Hoelscher, Timmothy Duran with lots of EMOTIONAL DAMAGE &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}