import { useState } from 'react'
import LoginForm from "../../components/LoginForm"
import UserAPI from '../../utils/UserAPI'
import "./Login.css";
const Login = () => {
  const [loginState, setLoginState] = useState({
    email: '',
    username: '',
    password: '',
    lUsername: '',
    lPassword: ''
  })

  loginState.handleInputChange = ({ target: { name, value } }) => setLoginState({ ...loginState, [name]: value })

  const handleLoginUser = event => {
    event.preventDefault()
    UserAPI.login({
      username: loginState.lUsername,
      password: loginState.lPassword
    })
      .then(token => {
        localStorage.setItem('user', token)
        setLoginState({ ...loginState, lUsername: '', lPassword: '' })
        window.location = '/'
      })
  }

  return (
    <div>
      <value={loginState}>
      <div className="container">
        <div className="row bg-dark p-5 rounded-lg m-3">
          <h1 className="display-4">Pocket Change</h1>
          <p className="lead">Please provide your login information below</p>
          <hr className="my-4" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Log In To Existing Account</h5>
            <hr />
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
