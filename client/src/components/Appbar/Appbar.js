import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Appbar = () => {

  const handleLogOutUser = () => {
    localStorage.removeItem('user')
    window.location = '/login'
  }

  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          Song App
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <Link to="/">
                Home
              </Link>
            </NavItem>
          </Nav>
          <NavbarText onClick={handleLogOutUser}>
            Log Out
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Appbar
