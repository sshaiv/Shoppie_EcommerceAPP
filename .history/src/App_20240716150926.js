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
      <Routes>
      <Route path='/' element={<shop/>}/>
      <Route path='/mens' element={<ShopCategory category='mens'/>}/>
      <Route path='/womens' element={<ShopCategory category='mens'/>}/>
      <Route path='/kids' element={<ShopCategory/>}/>
      
      </Routes>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App;
