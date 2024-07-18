import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Route path='/' element={}
      </BrowserRouter>
     
      
    </div>
  )
}

export default App;
