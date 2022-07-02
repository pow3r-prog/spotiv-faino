import React from 'react'

import NavLogo from 'assets/img/navigation/logo.svg'

import NavList from './NavList/NavList'

import './Navigation.scss'

const Navigation = (): React.ReactElement => {
  return (
    <div className='nav'>
      <img className='nav--title' src={NavLogo} alt='NavLogo' />
      <NavList />
    </div>
  )
}

export default Navigation as React.FC
