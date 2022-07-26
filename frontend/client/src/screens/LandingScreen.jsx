import React, { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { totalMembers, getTotalMembers } from '../slices/membersSlice'

const LandingScreen = () => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const members = useSelector((state) => state.members)
    const {count} = members
    console.log(count)

    useEffect(() =>{
      dispatch(getTotalMembers())
    },[])
  
    const postData = async () => {
      const newUserData = {name: name, email: email}
      const {data} = await axios.post("/signup", newUserData)
      navigate(`/${data._id}`)
    }
  
    const submitHandler = async (e) => {
      e.preventDefault()
      setName("")
      setEmail("")
      postData()
    }
  return (
    <div className="min-h-screen flex flex-col text-white">
    <main className="container mx-auto px-6 pt-16 flex-1 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black  mb-8 uppercase">
          The landing page
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          942,243 members
        </div>

        <form onSubmit={submitHandler}>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <input className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full mb-4
          md:mb-0 " placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)}>

          </input>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <input className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4
          md:mb-0 " placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email">

          </input>
          <input className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-2 px-3 md:px-10 lg:py-4 lg:px-12 cursor-pointer hover:opacity-75 duration-150  " type="submit" value="Join today"/>
          
        </div>
        </form>          
        
    </main>

    <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with love</p>

        <div className="flex -mx-6">
          <a className="mx-3 hover:opacity-80 duration-150" href="/">About us</a> |
          <a className="mx-3 hover:opacity-80 duration-150" href="/">Privacy</a> |
          <a className="mx-3 hover:opacity-80 duration-150" href="/">Contact</a>
        </div>
    </footer>
  </div>
  )
}

export default LandingScreen