import React, { useState } from 'react'
import {Link,useNavigate } from "react-router-dom"
import axios from 'axios'
import { signInFailure,signInSuccess,signInStart } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function Signin() {
  const {loading,error,currentUser}=useSelector((state)=>state.user)
  const navigate= useNavigate()
  const dispatch=useDispatch();
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const data={
        email,
        password ,  
      };
      const res= await axios.post('http://localhost:3000/api/auth/signin',data,{headers: {
        'Content-Type': 'application/json'
      }});
      dispatch(signInSuccess(res))

      console.log(res)
      
    } catch (error) {
     dispatch(signInFailure(error))
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='email'
        placeholder='Email'
        id='email'
        className='bg-slate-100 p-3 rounded-lg'
        onChange={(e)=>setEmail(e.target.value)}
      
      />
      <input
        type='password'
        placeholder='Password'
        id='password'
        className='bg-slate-100 p-3 rounded-lg'
        onChange={(e)=>setPassword(e.target.value)}
      
      />
      <button
        
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
      SUBMIT
      </button>
     
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Dont Have an account?</p>
      <Link to='/signup'>
        <span className='text-blue-500'>Sign up</span>
      </Link>
    </div>
    <p className='text-red-700 mt-5'>
      
    </p>
  </div>
  )
}

export default Signin
