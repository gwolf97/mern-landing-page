import React from 'react'
import {useNavigate} from "react-router-dom"

const Redirect = () => {
    const navigate = useNavigate()
    React.useEffect(() =>{
      navigate("/home")
    },[])
  return (
    <div></div>
  )
}

export default Redirect