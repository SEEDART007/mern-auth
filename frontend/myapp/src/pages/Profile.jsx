import React from 'react'
import { useSelector } from 'react-redux'


function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div>
      
      welcome! <span>{currentUser.data.username}</span>
    </div>
  )
}

export default Profile
