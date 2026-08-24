import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/Contact"}>Contact</Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar