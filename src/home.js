import React, { useEffect, useState } from 'react'
import { Api, CreateNewUser } from './api';
import viewIcon from './assets/view.png'
import EditIcon from './assets/edit.png'
import AddIcon from './assets/adduser.png'
import TrashIcon from './assets/trash.png'

const Home = () => {
    document.title = "React Project 3";
    const [users, setUsers] = useState([]);
    const [createUser, setCreateUser] = useState(false);
    const [createName, setCreateName] = useState('')
    const [createEmail, setCreateEmail] = useState('')
    const [createPassword, setCreatePassword] = useState('')
    const [createAvatar, setCreateAvatar] = useState('')


    const fetchUsersData = async () => {
        const data = await Api('https://api.escuelajs.co/api/v1/users')
        if (data) {
            setUsers(data);
        }
    }

    const createUserOnclick = () => {
        setCreateUser(!createUser)
    }

    const onChangeName = (e) => {
        setCreateName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setCreateEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setCreatePassword(e.target.value)
    }

    const onChangeAvatar = (e) => {
        setCreateAvatar(e.target.value)
    }

    const handleCreateuser = async () => {
        const data = await CreateNewUser(createName, createEmail, createPassword, createAvatar);
        if(data){
            fetchUsersData();
            setCreateUser(false)
        }
        console.log(data);
    }

    useEffect(() => {
        fetchUsersData();
    }, [])
  return (
    <>
        <div className="homePage">
        {createUser && (
            <div className="createUserPop">
            <form action={handleCreateuser}>
                <fieldset>
                    <legend>Create User</legend>
                    <input type="text" name='' value={createName} onChange={onChangeName} placeholder='Enter name' />
                    <input type="text" name='' value={createEmail} onChange={onChangeEmail} placeholder='Enter email' />
                    <input type="password" name='' value={createPassword} onChange={onChangePassword} placeholder='Enter password' />
                    <input type="url" name='' value={createAvatar} onChange={onChangeAvatar} placeholder='Enter image url' />
                    <button type="submit">Create User</button>
                </fieldset>
            </form>
        </div>
        )}
        <div className="adduser">
          <span onClick={createUserOnclick}>{createUser === true ? (<div>Close <i><img src={TrashIcon} alt="" /></i></div>) : (<div>Create User <i><img src={AddIcon} alt="" /></i></div>)}</span>
        </div>
            <table border='1px solid #000'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Avatar</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                {users.map((item) => (
                    <tr id={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td><img src={item.avatar} alt="" /></td>
                        <td>
                            <i><img src={viewIcon} alt="" /></i>
                            <i><img src={EditIcon} alt="" /></i>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Home