import React from 'react'
import './style.scss'
import { BiAt } from "react-icons/bi"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoPersonCircleSharp } from "react-icons/io5"

const Signup = () => {
  return (
    <div className='content'>
    <h3>Create account</h3>
    <form className="login__form-content">
    <div className="input-box">
        <IoPersonCircleSharp />
        <input type="password" className='input'
          placeholder=" "
        />
        <label htmlFor="">Fullname</label>
      </div>

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

      <div className="input-box">
        <RiLockPasswordFill />
        <input type="password" className='input'
          placeholder=" "
        />

        <label htmlFor="">Confirm Password</label>
      </div>

      <div className='password-feature'>
        <div className='remember'>
          <input type='checkbox'></input>
          <p>I agree with <span>Terms</span> and <span>Privacy</span></p>
        </div>
        
      </div>

      <div className='btn-login'>Sign up</div>

      <p className='text'>Already have an account? <span className="text-signup" >Sign in</span></p>
    </form>
  </div>
  )
}

export default Signup