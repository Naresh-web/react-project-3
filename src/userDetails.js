import React, { useEffect, useState } from 'react'
import { fetchUserById } from './api';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';
import Layout from './Layout/layout';

const UserDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    console.log(id)
    const [userInfo, setUserInfo] = useState({})
    const userData = async () => {
        const data = await fetchUserById(id)
        if(data){
            setUserInfo(data)
        }
    }
    const handleAddUser = () =>{
        dispatch(addItem(userInfo))
    }

    useEffect(() => {
        userData()
    }, [ ])
  return <>
    <Layout>
    <div>userDetails</div>
        
        <figure>
        <img src={userInfo.avatar} alt="" />
            <figcaption>{userInfo.name}</figcaption>
        </figure>
        <button onClick={() => handleAddUser()}>Add to cart</button>
    </Layout>
        

  </>


}

export default UserDetails