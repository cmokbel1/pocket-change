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
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Container from '@mui/material/Container';
import './App.css'

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
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
