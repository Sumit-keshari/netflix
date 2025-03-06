import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validate } from '../utils/Validate';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleValidation = () => {
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(name.current.value);

    const message = Validate(email.current.value, password.current.value, name.current.value);
    seterrorMessage(message);
  }
  const toggleClick = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className='justify-center flex relative'>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" alt="logo" />
      </div>
      <form onSubmit={(event) => event.preventDefault()} className='relative  top-40 w-[30%] bg-black text-white p-12 opacity-80 rounded'>
        <h3 className='font-bold text-3xl px-1.5 py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h3>

        {!isSignIn && <input type="text" ref={name} placeholder='Enter Your Full Name' className='p-2 m-2  bg-gray-400 text-black w-full' />}

        {!isSignIn && <input type='date' className='p-2 m-2  bg-gray-400 text-black w-full' />}

        <input ref={email} type='email' placeholder='Email or phone number' className='p-2 m-2 cursor-pointer bg-gray-400 text-black w-full' />


        <input ref={password} type="password" placeholder='Password' className='p-2 m-2 bg-gray-400 text-black w-full' />
        <p className='text-red-700 px-2'>{errorMessage}</p>

        <button onClick={handleValidation} className='bg-red-600 rounded w-full m-2 p-2 cursor-pointer text-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>

        <div className='flex justify-between items-center p-2 m-2'>
          <label>
            <input type="checkbox" className='mr-2' />
            Remember me
          </label>
          <p className='text-blue-500'>Need help?</p>
        </div>
        <div className='flex justify-center  text-center mt-4'>
          <div>{isSignIn ? 'New to Netflix?' : 'Already have an account?'}
          </div>
          <button type="button" onClick={toggleClick} className='text-blue-400'>{isSignIn ? "Sign Up" : "Sign In"}</button>.
        </div>
      </form>
    </div >
  )
}

export default Login