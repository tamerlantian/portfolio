import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className='font-display h-full'>
      <Navbar />
      <div className='h-screen bg-cyan-500'>
        Main
      </div>
    </div>
  )
}

export default App
