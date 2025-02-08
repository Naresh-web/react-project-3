import React, { useEffect, useState } from 'react'
import { Api, CreateNewUser, UpdateUserById } from './api';
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
    const [getUserId, setGetUserId] = useState('');
    const [userData, setUserData] = useState({})
    const [updateName, setUpdateName] = useState('')
    const [updateEmail, setUpdateEmail] = useState('')


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

    const closePop = () => {
        setGetUserId('')
        setUserData({})
    }

    const UpdateUser = (userRecord) => {
        setGetUserId(userRecord.id)
        console.log(userRecord.id);
        setUserData(userRecord)

        console.log(userRecord);
    }

    const onUpdateName = (e) => {
        setUpdateName(e.target.value)
    }
    const onUpdateEmail = (e) => {
        setUpdateEmail(e.target.value)
    }

    const handleCreateuser = async () => {
        const data = await CreateNewUser(createName, createEmail, createPassword, createAvatar);
        if(data){
            fetchUsersData();
            setCreateUser(false)
        }
        console.log(data);
    }

    const EditUser = async () => {
        const data = await UpdateUserById(userData.name, userData.email, userData.id);
        console.log(data);
    }

    useEffect(() => {
        fetchUsersData();
    }, [])

    useEffect(() => {
        if(Object.keys(userData).length > 0){
            setUpdateName(userData.name);
            setUpdateEmail(userData.email)
        }
    }, [userData])

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
                    <input type="url" name='' value={createAvatar} onChange={onChangeAvatar} placeholder='Enter image url' required />
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
                {
                    users.map((item) => (
                    <tr id={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td><img src={item.avatar} alt="" /></td>
                        <td>
                            <i><img src={viewIcon} alt="" /></i>
                            <i onClick={() => UpdateUser(item)}>Edit &nbsp;<img src={EditIcon} alt="Close" /></i>
                            {getUserId === item.id && (
                                <div className="updateUser">
                                <div className="close" onClick={closePop}>X</div>
                                <fieldset>
                                    <legend>Update User</legend>
                                    <form action={EditUser}>
                                        <input type="text" value={updateName} onChange={onUpdateName} name='name' placeholder='Update name' />
                                        <input type="text" value={updateEmail} onChange={onUpdateEmail} name='email' placeholder='Update email' />
                                        <button type="submit">Update</button>
                                    </form>
                                </fieldset>
                            </div>
                            )}
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Home