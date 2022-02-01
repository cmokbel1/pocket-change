import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Budget from './pages/Budget'
import Reports from './pages/Reports'
import Profile from './pages/AboutUs'
import AboutUs from './pages/AboutUs'
import NavBar from './components/NavBar'
import Container from '@mui/material/Container';
import './App.css'

// import * as React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import ProTip from './ProTip';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function App() {
//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Create React App example
//         </Typography>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
