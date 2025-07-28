import React from 'react'

const Signup = () => {
  return (
    <div>
      <form className='max-w-md mx-auto pt-24'>
        <h2 className='font-bold pb-2'>Sign up Today!</h2>
        <p>
          Already have an account? <Link to="/Signin">Sign in!</Link>
        </p>
        <div className='flex flex-col py-4'>
          <input className='p-3 mt-6' type="email" name=" id "/>
          <input className='p-3 mt-6' type="password" name=" id "/>
          <button className='mt-6 w-full'>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup