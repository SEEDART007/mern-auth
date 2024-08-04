import React from 'react'
import { useSelector } from 'react-redux'


function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl font-semibold text-center mt-5'>Profile</h1>
      <form className=' flex flex-col gap-4 '>
        <img className='w-24 h-24 cursor-pointer rounded-full object-cover self-center mt-6' src={currentUser.data.profilePic} alt="" />
        <input className=' bg-slate-200 h-11 p-3 rounded-md' defaultValue={currentUser.data.username} type="text" placeholder='Username' />
        <input className=' bg-slate-200 h-11 p-3 rounded-md' defaultValue={currentUser.data.email} type="email" placeholder='Email' />
        <input className=' bg-slate-200 h-11 p-3 rounded-md' type="password" placeholder='Password' />
        <button className=' p-4 bg-slate-700 text-white rounded-lg'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span
          className='text-red-700 cursor-pointer'
        >
          Delete Account
        </span>
        <span className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
    </div>
  )
}

export default Profile
