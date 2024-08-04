import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function OAuth() {
  const navigate =useNavigate()
  const dispatch=useDispatch()
  const handleGoogle=async()=>{
    try {
      dispatch(signInStart)
      const provider= new GoogleAuthProvider()
      const auth=getAuth(app)
      const result = await signInWithPopup(auth,provider)
  
      const data={
        name:result.user.displayName,
        email:result.user.email,
        photo:result.user.photoURL  
      }
      const res=await axios.post('http://localhost:3000/api/auth/google',data)
      dispatch(signInSuccess(res))
      navigate('/profile')
     
    } catch (error) {
      signInFailure(error)
    }
  }
  return (
    <div>
      <button onClick={handleGoogle} type='button' className='bg-red-600 text-white rounded-lg p-3 uppercase hover:opacity-95 max-w-full'>Continue With Google</button>
    </div>
  )
}

export default OAuth
