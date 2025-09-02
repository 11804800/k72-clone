import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path="/agence" Component={Agence}/>
      <Route path="/project" Component={Projects}/>
    </Routes>
    </>
  )
}

export default App