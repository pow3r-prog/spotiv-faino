import React from 'react'

import { NavLink } from 'react-router-dom'

import NavLogo from 'assets/img/navigation/logo.svg'

import NavList from './NavList/NavList'

import './Navigation.scss'

const Navigation = (): React.ReactElement => {
    return (
        <div className='nav'>
            <NavLink to='/home'>
                <img className='nav--title' src={NavLogo} alt='NavLogo' />
            </NavLink>
            <NavList />
        </div>
    )
}

export default Navigation as React.FC
