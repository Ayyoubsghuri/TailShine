import React,{useEffect} from 'react'
import axios from 'axios'

let data = {
  'refresh' : `${localStorage.getItem('refresh')}`,
}
const AuthRefresh=()=>{
  useEffect(() => {
    axios
        .post('http://localhost:8000/api/auth/refresh/',data)
        .then((response) => {
          if (response.data.access) {
            localStorage.setItem('access', response.data.access);
          }
        })
        .catch((error) => {
          if (error.code ===405){
            localStorage.clear();
          }
            
    });
  }, []);
}

export default AuthRefresh;