import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Budget from './pages/Budget'
import Reports from './pages/Reports'
import AboutUs from './pages/AboutUs'
import Profile from './pages/AboutUs'
// import NavBar from './components/NavBar'
// import Container from '@mui/material/Container'
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
      </Routes>
    </Router>
    </>
  )
}

export default App
