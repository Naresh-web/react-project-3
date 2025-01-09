import React, { useState } from 'react';
import { CreateNewUser } from './api';

const CreateUser = ({closePop, FetchUserData, inputRef}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field based on name
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const resp = await CreateNewUser(formData.name, formData.email, formData.password, formData.avatar);
    if(resp){
      FetchUserData();
      closePop()
    }
    // Here you can send the data to your backend or perform other actions
  };

  return (
    <>
        <div className="createUser">
            <div className="userPopupBody">
                <div className="close" onClick={closePop}>X</div>
                <form action={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input type="text" ref={inputRef} name="name" value={formData.name} onChange={handleChange} placeholder='Enter name'  />
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" value={formData.email}   onChange={handleChange}  placeholder='Enter email'  />
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" value={formData.password}  onChange={handleChange}  placeholder='Enter password'  />
                  <label htmlFor="avatar">Avatar</label>
                  <input type="url"  name="avatar" value={formData.avatar} placeholder='Enter image URL'  onChange={handleChange}   />
                  <button type="submit">Create</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreateUser;