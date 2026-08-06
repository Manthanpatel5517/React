import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Pnf from './Pages/Pnf'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
       <Route path="*" element={<Pnf/>}></Route>
    </Routes>
    </>
  )
}

export default App