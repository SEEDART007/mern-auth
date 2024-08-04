import React from 'react'
import {Link } from "react-router-dom"
import { useSelector } from 'react-redux'

function Header() {
  const {currentUser} = useSelector((state)=>state.user)

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
        <Link to='/profile'>
         { currentUser ? (
          <img className='h-10 w-10 object-cover rounded-full' src={currentUser.data.profilePic} alt="" />
         ):(    <li>signin</li>)}
        </Link>
    </ul>
  </div>
   </div>
  )
}

export default Header
