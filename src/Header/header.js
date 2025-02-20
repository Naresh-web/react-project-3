import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)
  return <>
        <div className="header">
            <div className="logo">Logo</div>
            <div className="navItem">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/users'>Users</NavLink>
              <NavLink to='/cart'>Cart</NavLink>
            </div>
            <p>Cart Items: {cartItems.length}</p>
        </div>
  </>
    
}

export default Header