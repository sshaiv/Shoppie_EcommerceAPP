import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
     

      <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text"  placeholder='Your Name'/>
        <input type="email" placeholder='Your email' />
        <input type="password" placeholder='Password'/>
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">A</p>
      </div>
      
    </div>
  )
}

export default LoginSignup
