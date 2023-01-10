import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer font-small bg-dark text-white mt-auto fixed-bottom">
      <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <NavLink to="/"> Trushit.com</NavLink>
      </div>
    </footer>
  )
}

export default Footer
