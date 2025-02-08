import React, { useEffect, useState } from 'react'
import { Api } from './api'

const About = () => {
    const [userData, setUserData] = useState([]);

    const loadUsers = async () => {
        const resp = await Api('https://api.escuelajs.co/api/v1/users');
        if(resp){
            setUserData(resp)
            console.log(resp);
        }
    }
    useEffect(() => {
        loadUsers()
    }, [])
  return (
    <>
        <table>
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
                userData.map(({id, name, email, role, avatar}) => (
                    <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                    <td><img src={avatar} alt="" /></td>
                    <td>Actions</td>
                </tr>
                ))
            }
            </tbody>
        </table>
    </>
  )
}

export default About;