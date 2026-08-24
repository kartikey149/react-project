import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'
import FulllscreenNav from './components/navigation/FulllscreenNav'


const App = () => {
  

  return (
    <div className=' min-h-screen w-full'>
      <Navbar />
      {/* <FulllscreenNav /> */}
      
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/agence" element={<Agence />} />
  <Route path="/projects" element={<Projects />} />
</Routes>

    </div>
  )
}

export default App