import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Route path='/' element={<shop/>}/>
      <Route path='/mens' element={<ShopCategory/>}/>
      <Route path='/womens' element={<ShopCategory/>}/>
      <Route path='/kids' element={<ShopCategory/>}/>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App;
