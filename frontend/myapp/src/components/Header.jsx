import React from 'react'
import {Link } from "react-router-dom"

function Header() {
  return (
   <div className='bg-blue-500'>
  <div className='flex justify-between items-center max-h-48'>
    <Link to='/'>
    <h1 className=' m-7 font-bold'>Authorization</h1>
    </Link>
    <ul className='flex gap-4 m-4  font-bold'>
    <li>Home</li>
    <Link to='/about'>
        <li>About</li>
        </Link>
        <Link to='/signin'>
        <li>Sign-In</li>
        </Link>
    </ul>
  </div>
   </div>
  )
}

export default Header
