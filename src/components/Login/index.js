import {useState} from 'react'
import Cookies from 'js-cookie'
import TopStatus from '../TopStatus'
import './index.css'

const Login = props => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const sucessLogin = () => {
    const token = 'user-Authenticated'
    Cookies.set('token', token)
    const {history} = props
    history.replace('/')
  }
  const validateCredentials = event => {
    event.preventDefault()

    if (name === '') {
      setErrMsg('enter Valid Name')
      return
    }
    if (password === '') {
      setErrMsg('enter Valid Password')
      return
    }
    sucessLogin()
  }
  const changeName = event => {
    setName(event.target.value)
  }

  const changePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <div className="login-container">
      <div className="login-responsive-container">
        <TopStatus />
        <div className="credential-container">
          <img
            src="https://i.ibb.co/tbk4Nzm/Group-3-2x.png"
            alt="logo"
            className="site-logo"
          />
          <p className="theme-text">We are Electric</p>
          <form className="login-form-container" onSubmit={validateCredentials}>
            <div className="login-input-container">
              <input
                type="text"
                placeholder="E-mail"
                value={name}
                onChange={changeName}
              />
            </div>
            <div className="login-input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={changePassword}
              />
            </div>
            <p className="err-msg">{errMsg}</p>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="password-reset-link">Forgot Password?</p>
        </div>
      </div>
    </div>
  )
}
export default Login
