import React from 'react'

const ThankYouScreen = () => {
  return (
    <main className="min-h-screen flex flex-col text-white">
        <div className="container mx-auto px-6 pt-16 flex-1 text-center">
               <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
               Alex mid
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black  mb-8 uppercase">
            Thanks for joining
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          942,243 members
        </div>
        </div>
    </main>
  )
}

export default ThankYouScreen