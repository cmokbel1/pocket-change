import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import project2 from './project2.png';
// Import query me

const ProfileCard = () => {
  // Use the query to swap out the hard coded user info for the logged in user instead
  
  return (
    <>
      <Container>
        <img src={project2} alt='project 2 pic' width="250px" height="250px" style={{borderRadius: "50%"}}/>
        <Typography>Username: TimDuran</Typography>
        <Typography>Email: Email</Typography>
      </Container>
    </>
  )
}

export default ProfileCard;