import React, { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import axios from "axios"

function Signup() {
  const navigate=useNavigate()
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const [error,setError]=useState(false)

  const[loading,setLoading]=useState(false)
  // const[formData,setFormData]=useState({})
  // const handleChange=(e)=>{
  //   setFormData({...formData,[e.target.id]:[e.target.value]})
    
  // }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      setError(false)

      const data={
        username,
        email,
        password
            }
        const res=   await axios.post("http://localhost:3000/api/auth/signup",data)
        navigate('/signin')
        console.log(res)
           setLoading(false)
           if(res.success==false){
            setError(true)
          
            return;
           }
      
    } catch (error) {
       setLoading(false)
           setError(true)
    }
   
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Username'
        id='username'
        className='bg-slate-100 p-3 rounded-lg'
        onChange={(e)=>setUsername(e.target.value)}
      />
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
      disabled={loading}
       
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
      {loading?'Loading...':'Sign-Up'}
      </button>
    
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to='/signin'>
        <span className='text-blue-500'>Sign in</span>
      </Link>
    </div>
   <h1 className='text-red-800 font-extrabold'>{error&&"something went wrong"}</h1>
  </div>
  )
}

export default Signup
