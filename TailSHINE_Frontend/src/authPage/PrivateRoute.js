import React , { useState } from 'react'
import { Navigate  } from 'react-router-dom';


const PrivateRoute = () => {
  return (
    localStorage.getItem('access')?<Navigate to="/dashboard" />  :<Navigate to="/login" />   
  )
}

export default PrivateRoute