import { useContext, useState } from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import {HiOutlineShoppingCart} from 'react-icons/hi'

import './navbar.css'

export default function navbar() {

  const {sumtTotal, cartCounter, sidebarState, setSidebarState} = useContext(ShopContext)
  const location = useLocation()
  console.log('location:', location);

  return (
    <nav style={{justifyContent: `${location.pathname === '/cart' ? '' : 'end'}`}}>
      { location.pathname === '/cart' &&
        <button className='sidebar-btn' onClick={() => setSidebarState(!sidebarState)}><HiOutlineShoppingCart size={20}/></button>
      }

      <ul className="links">
        <NavLink to="/">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <AiOutlineShopping size={20}/>
            <span className="counter">{sumtTotal}{!!cartCounter && cartCounter}</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}
