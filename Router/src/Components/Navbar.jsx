import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul style={{display:'flex',justifyContent:'space-around',listStyle:'none'}}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/contact"}>contact</Link></li>
    </ul>
  )
}

export default Navbar