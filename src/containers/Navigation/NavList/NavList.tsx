import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { data } from './data'

const NavList = (): React.ReactElement => {
    const location = useLocation()

    const pathname = location.pathname

    const activeNavBtnByPath = (item: { path: string }) => {
        if (item) {
            return pathname.includes(item.path)
        }
        return item
    }

    return (
        <div className='nav--list'>
            {data.map(item => (
                <NavLink
                    key={item.key}
                    className={
                        activeNavBtnByPath(item)
                            ? 'nav--list-item active'
                            : 'nav--list-item'
                    }
                    to={item.path}
                >
                    <img src={item.icon} alt='NavLogo' />
                </NavLink>
            ))}
        </div>
    )
}

export default NavList as React.FC
