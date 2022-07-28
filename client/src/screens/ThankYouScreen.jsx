import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const ThankYouScreen = () => {
    const [members, setMembers] = React.useState("")
    const [name, setName] = React.useState("")
    
    const params = useParams()
    const {id} = params

    React.useEffect(()=>{
    const getMembersCount = async () => {
      const {data} = await axios.get("/home")
      const {members} = data
      setMembers(members)
    }

    const getName = async () => {
        const {data} = await axios.get(`/home/${id}`)
        const {name} = data
        setName(name)
    }

    getName()
    getMembersCount()
    },[id])
  return (
    <main className="min-h-screen flex flex-col text-white">
        <div className="container mx-auto px-6 pt-16 flex-1 text-center">
               <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
               {name}
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black mb-2 uppercase">
            Thanks for joining
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          {members} member{members !== 1 && "s"}
        </div>
        </div>
    </main>
  )
}

export default ThankYouScreen