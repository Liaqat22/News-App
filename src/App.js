import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Acordian from './Component3/Acordian'
import Head from './Component3/Head'
// import About from './Component2/About'
// import Contact from './Component2/Contact'
// import Home from './Component2/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/head' element = {<Head/>} />
      <Route path='/acodian' element = {<Acordian/>} />

      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
