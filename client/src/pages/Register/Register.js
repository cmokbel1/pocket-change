import { useState } from 'react'
import RegisterForm from "../../components/RegisterForm"
import UserAPI from '../../utils/UserAPI'
import "./Login.css";
const Login = () => {

  return (
    <div>
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
