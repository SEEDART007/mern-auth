import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'
import {app} from '../firebase'


function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  const[image,setImage]=useState(undefined)
  const[imagePercent,setImagePercent]=useState(0)
  const[imageError,setImageError]=useState(null)
  const[formData,setFormData]=useState({})
  console.log(formData)
  useEffect(()=>{
    handleFileUpload(image);
  },[image])
  const handleFileUpload=async(image)=>{
    const storage = getStorage(app)
    const fileName= new Date().getTime() + image.name
    const storageRef=ref(storage,fileName)
    const uploadTask= uploadBytesResumable(storageRef,image)
    uploadTask.on(
      'state_changed',
      (snapshot)=>{
        const progress=Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        setImagePercent(progress)
      },
    
    (error)=>{
      setImageError(true)
    },
    ()=>{
       getDownloadURL(uploadTask.snapshot.ref).then(download=>{
        setFormData({...formData,profilePic:download})

       })
    }
  )
  }
  const fileRef=useRef(null)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl font-semibold text-center mt-5'>Profile</h1>
      <form className=' flex flex-col gap-4 '>
        <input type="file" ref={fileRef}hidden accept='image/*'  onChange={(e)=>setImage(e.target.files[0])}/>
        <img onClick={()=>fileRef.current.click()} className='w-24 h-24 cursor-pointer rounded-full object-cover self-center mt-6' src={currentUser.data.profilePic} alt="" />
        {/* <h1> {imagePercent}% image is uploaded</h1> */}
        <p>{
          imageError ? (<h1 className='text-red-700'>Error while uploading image</h1>):imagePercent>0&&imagePercent<100 ? (<h1 className='text-blue-600'>Uploading: {imagePercent} %</h1>):(<h1 className='text-green-900' >Uploaded Successfully</h1>)
          }</p>
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
