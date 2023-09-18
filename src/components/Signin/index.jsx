import React from 'react'
import './style.scss'
import { BiAt } from "react-icons/bi"
import { RiLockPasswordFill } from "react-icons/ri"
import { FcGoogle } from "react-icons/fc"

const Signin = () => {
  return (
    <div className='content'>
      <h3>Welcome Back!</h3>
      <form className="login__form-content">
        <div className="input-box">
          <BiAt />
          <input type="text" className='input'
            placeholder=" "
          />
          <label htmlFor="">Email address</label>
        </div>

        <div className="input-box">
          <RiLockPasswordFill />
          <input type="password" className='input'
            placeholder=" "
          />

          <label htmlFor="">Password</label>
        </div>

        <div className='password-feature'>
          <div className='remember'>
            <input type='checkbox'></input>
            <p>Remember me</p>
          </div>
          <div className='forgot'>Forgot password?</div>
        </div>

        <div className='btn-login'>Sign in</div>
        <div className='btn-login-google'>
          <FcGoogle />
          <p>Sign in with Google</p>
        </div>

        <p className='text'>Don't have an account? <span className="text-signup" >Sign up</span></p>
      </form>
    </div>
  )
}

export default Signin