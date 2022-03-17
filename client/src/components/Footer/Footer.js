import * as React from 'react';

import { Container, Grid, Box, Link } from '@material-ui/core'

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
                <Link href= "/login" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href= "/register" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                <Link href="/AboutUs" color="inherit">
                  About Us
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Created By: Claude Mokbel, Jazmine Jose, Malia Pringle, Oliver Hoang, Rachel Hoelscher, and Timothy Duran &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}