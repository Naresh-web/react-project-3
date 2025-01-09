import React, { useEffect, useState, useRef } from 'react';
import { Api } from "./api";
import ViewUser from "./assets/view.png";
import AddUser from "./assets/adduser.png";
import EditIcon from './assets/edit.png'
import CreateUser from "./create-user";
import UpdateUser from "./update-user";

const Users = () => {
    const [user, setUser] = useState([]);
    const [create, setCreate] = useState(false);
    const [updateUser, setUpdateUser] = useState("");
    const [userData, setUserData] = useState({})
    const buttonRef = useRef(null);
    const inputRef = useRef(null);
  
    const FetchUserData = async () => {
      const data = await Api('https://api.escuelajs.co/api/v1/users')
      if(data){
        console.log({data});
        setUser(data)
      }
    }
  
    const addUser = () => {
     setCreate(true);
     if(buttonRef?.current){
      buttonRef.current.style.color="red";
     }
     if(inputRef?.current){
      inputRef?.current?.focus();
      console.log('xxxxxx',inputRef?.current?.value)
      
     }
    }
  
    const userUpdate = (record) => {
      setUpdateUser(record.id);
      setUserData(record)
    }
  
    const closePop = () => {
      setCreate(false);
      setUpdateUser("");
      setUserData({});
    }
  
    useEffect(() => {
      FetchUserData();
    }, []);
  
    console.log(updateUser, userData);
  return (
    <>
        <div className="users">
        <div className="table">
        <div className="adduser">
          <span onClick={addUser}>Add User <i><img src={AddUser} alt="" /></i></span>
        </div>
          <table>
            <thead>
              <tr>
                <td ref={buttonRef}>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Avatar</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
            {user.map(item => (
              <tr key={item.id} >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td><img src={item.avatar} alt="" /></td>
                <td>
                  <i>View &nbsp; <img src={ViewUser} alt="View User" /></i>
                  <i onClick={() => userUpdate(item)}>Edit &nbsp; <img src={EditIcon} alt="Update User" /></i>
                  {updateUser === item.id && <UpdateUser closePop={closePop} userData={userData} />}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div> 
        {create && <CreateUser closePop={closePop} FetchUserData={FetchUserData} inputRef={inputRef} />}
        </div>
    </>
  )
}

export default Users;