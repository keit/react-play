import React from 'react'

import { NavLink } from 'react-router-dom'

const navLinkStyles =
  (additionalProps: React.CSSProperties) =>
  (props: {
    isActive: boolean
    isPending: boolean
  }): React.CSSProperties | undefined => {
    const { isActive } = props
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      ...additionalProps
    }
  }

const Navbar: React.FC<any> = (props) => {
  const { className } = props
  return (
    <nav
      className={`primary-nav flex flex-col ${className}`}
      style={{ margin: 10 }}
    >
      <NavLink style={navLinkStyles({ padding: 5 })} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyles({ padding: 5 })} to='/products'>
        Products
      </NavLink>
      <NavLink style={navLinkStyles({ padding: 5 })} to='/users'>
        Users
      </NavLink>
      <NavLink style={navLinkStyles({ padding: 5 })} to='/about'>
        About
      </NavLink>
    </nav>
  )
}
export default Navbar
