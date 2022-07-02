import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { data } from './data'

const NavList = (): React.ReactElement => {
  let location = useLocation()

  const pathname = location.pathname

  const activeNavBtnByPath = (item: { path: string }) => {
    if (item) {
      return pathname.includes(item.path)
    }
    return item
  }

  return (
    <div className='nav--list'>
      {data.map((item) => (
        <NavLink
          className={
            activeNavBtnByPath(item)
              ? 'nav--list-item active'
              : 'nav--list-item'
          }
          to={item.path}
        >
          <img id={item.key} src={item.icon} alt='NavLogo' />
        </NavLink>
      ))}
    </div>
  )
}

export default NavList as React.FC
