import { useState } from 'react'

import './App.css'
import Navbar from './componets/Navbar'
import Price from './componets/Price'
import Welcome from './componets/Welcome'
import Project from './componets/Project'
import About from './componets/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Price/> 
    <About/> 
    <Project/>
   
     <Welcome/>
    </>
  )
}

export default App
