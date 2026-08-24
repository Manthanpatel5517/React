import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Product from './Pages/Product';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Errorpage from './Pages/Errorpage';
import axios from 'axios';

function App() {

  function fetchdata(){
    axios.get("https://fakestoreapi.com/products")
    .then((data)=>{console.log(data.data)})
    .catch((err)=>{console.log(err)})
  }
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Errorpage/>} />
      </Routes>
    
    </>
  )
}

export default App