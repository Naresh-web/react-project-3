import React, { useState, useEffect } from 'react'
import { UpdateUserById } from './api';

const UpdateUser = ({closePop, userData}) => {
  const [nameUpdate, setNameUpdate] = useState('');
  const [emailUpdate, setemailUpdate] = useState('');
  
  const updateName = (e) => {
    setNameUpdate(e.target.value)
  }
  const updateEmail = (e) => {
    setemailUpdate(e.target.value)
  }
  const editUser = async () => {
    await UpdateUserById(nameUpdate, emailUpdate, userData.id)
  }

  useEffect(() => {
      if(Object.keys(userData).length > 0){
        setNameUpdate(userData.name);
        setemailUpdate(userData.email);
      }
  }, [userData])
  return (
    <>
            <div className="updateUser">
            <div className="close" onClick={closePop}>X</div>
                <form action={editUser}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" value={nameUpdate} onChange={updateName} placeholder='Enter name'  />
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" value={emailUpdate} onChange={updateEmail} placeholder='Enter email'  />
                  <button type="submit">Update</button>
                </form>
            </div>

    </>
  )
}

export default UpdateUser;