import { useState } from 'react'
import RegisterForm from "../../components/RegisterForm"
import UserAPI from '../../utils/UserAPI'
//import "./Register.css";
``
const Register = () => {
  const [registerState, setRegisterState] = useState({
    email: '',
    username: '',
    password: '',
    rUsername: '',
    rEmail: '',
    rPassword: ''
  })

  registerState.handleInputChange = ({ target: { name, value } }) => setRegisterState({ ...registerState, [name]: value })

  const handleRegisterUser = event => {
    event.preventDefault()
    UserAPI.login({
      username: registerState.rUsername,
      email: registerState.rEmail,
      password: registaerState.rPassword
    })
      .then(token => {
        setRegisterState({ ...loginState, rUsername: '', rEmail, rPassword: '' })
        window.location = '/login'
      })
  }
  return (
    <div>
      <registerState.value={registerState}>
      <div className="container">
        <div className="row bg-dark p-5 rounded-lg m-3">
          <h1 className="display-4">Pocket Change</h1>
          <p className="lead">Please register your account to begin.</p>
          <hr className="my-4" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Register Your Account</h5>
            <hr />
          </div>
        </div>
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register