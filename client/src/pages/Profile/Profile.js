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
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ProfileCard from '../../components/ProfileCard';
import Footer from '../../components/Footer'

import './Profile.css'
const Profile = ()=> {
  return(
    <>
      <NavBar></NavBar>
      <ProfileCard></ProfileCard>
      <Footer></Footer>
    </>
  )
}

export default Profile;