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
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/Login" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/Register" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                <Link href="/Profile" color="inherit">
                  About Us
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Created By: Claude Mokbel, Jazmine Jose, Malia Pringle, Oliver Hoang, Rachel Hoelscher, Timothy Duran with lots of EMOTIONAL DAMAGE &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}