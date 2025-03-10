import React from 'react'
import Layout from './Layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './cartSlice'

const Cart = () => {
    const cartUsers = useSelector(state => state.cart.items);
    const { items } = useSelector(state => state.cart);
    console.log(items)
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