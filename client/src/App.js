import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Register from './pages/Reports/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Budget from './pages/Budget'
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

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
      </Routes>
    </Router>
    </>
  )
}

export default App
