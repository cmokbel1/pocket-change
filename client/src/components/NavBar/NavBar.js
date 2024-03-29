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
import Logo from '../../Assets/small_logo.png'
import './NavBar.css'

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar className="nav" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <a href='/' ><img className='pictureNav' src={Logo} alt='logo'></img></a>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
              
                className='dropDown'
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                
              >
                <MenuIcon  />
              </IconButton>
              <Menu
                className="menuNav"
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}

                onClose={handleCloseNavMenu}
                
                sx={{
                  display: { xs: 'block', md: 'none'},
                }}
              >
                <MenuItem style={{ backgroundColor: "#2a2e30" }} onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Budget';
                }}>
                    <Typography textAlign="center">Budget</Typography>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "#2a2e30" }} onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Reports';
                }}>
                  <Typography textAlign="center">Reports</Typography>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "#2a2e30" }}>
                  <Typography textAlign="center" onClick={(e) => {
                    e.preventDefault();
                    window.location = '/';
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');

                  }}>Logout</Typography>
                  </MenuItem>
                
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <a href='/' ><img className='pictureNav' src={Logo} alt='logo'></img></a>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              
                <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location = '/create';
                }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Budget
                </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Reports';
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Report
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location = '/';
                  localStorage.removeItem('user');
                  localStorage.removeItem('token');
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button>

            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
