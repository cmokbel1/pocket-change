import { useState } from 'react'
import LoginForm from "../../components/LoginForm"
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'
import "./Login.css";
const Login = () => {
  const [authState, setAuthState] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    lUsername: '',
    lPassword: ''
  })

  authState.handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })

  authState.handleLoginUser = event => {
    event.preventDefault()
    UserAPI.login({
      username: authState.lUsername,
      password: authState.lPassword
    })
      .then(token => {
        localStorage.setItem('user', token)
        setAuthState({ ...authState, lUsername: '', lPassword: '' })
        window.location = '/'
      })
  }

  return (
    <div>
    <AuthContext.Provider value={authState}>
      <div className="container">
        <div className="row bg-dark p-5 rounded-lg m-3">
          <h1 className="display-4">Song App</h1>
          <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a inventore quis laboriosam, quae nihil. Veritatis, aut voluptatem! Minima consectetur, modi consequuntur qui neque expedita? Beatae omnis ipsa quos dolor.
            Corrupti dolor repellat non accusamus nostrum necessitatibus, dicta libero. Dolorum blanditiis incidunt similique nesciunt laudantium est maiores deleniti consequatur debitis ipsam, animi eligendi alias suscipit error, doloremque facilis! Quod, saepe?</p>
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
    </AuthContext.Provider>
    </div>
  )
}

export default Login
