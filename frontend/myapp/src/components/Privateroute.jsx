import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function Privateroute() {
  const navigate=useNavigate()
    const {currentUser} = useSelector((state)=>state.user)
    
  return (
    <div>
      {
        currentUser ? <Outlet/> : <Navigate to='/signin'/>
      }
    </div>
  )
}

export default Privateroute
