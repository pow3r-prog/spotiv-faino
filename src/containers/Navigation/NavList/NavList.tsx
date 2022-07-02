import React from 'react'

import { data } from './data'

const NavList = (): React.ReactElement => {
  return (
    <div className='nav--list'>
      {data.map((item) => (
        <img
          className='nav--list-item'
          id={item.key}
          src={item.icon}
          alt='NavLogo'
        />
      ))}
    </div>
  )
}

export default NavList as React.FC
