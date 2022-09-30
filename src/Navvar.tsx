import React from 'react'

// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
const Navbar: React.FC<any> = () => {
  const navLinkStyles = (props: {
    isActive: boolean
    isPending: boolean
  }): React.CSSProperties | undefined => {
    const { isActive } = props
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/about">About</Link> */}
      <NavLink style={navLinkStyles} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to='/about'>
        About
      </NavLink>
    </nav>
  )
}
export default Navbar
