import React from 'react'
import Layout from './Layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './cartSlice'

const Cart = () => {
    const cartUsers = useSelector(store => store.cart.items)
    console.log(cartUsers)
    const dispatch = useDispatch()
    const handleRemoveUser = () => {
        dispatch(removeItem())
    }
  return <>
    <Layout>
        <p>Cart Page</p>
        <div className="cartUserCard">
        {cartUsers.map(item => (
            <div>
            <img src={item.avatar} alt="" />
            <p>{item.name}</p>
            <button onClick={() => handleRemoveUser()}>Remove from Cart</button>
            </div>
        ))}

        </div>
    </Layout>
  </>

}

export default Cart