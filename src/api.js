/** Global API to fetch data */
export const Api = async (URL) => {
    try {
        const resp = await fetch(URL);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
/** Global API to fetch data End */

export const fetchUserById = async (id) => {
    try{
        const resp = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
        const data = await resp.json()
        return data;
    }
    catch (err){
        console.log(err);
    }
}

/** Api for create new user  */
export const CreateNewUser = async (name, email, password, avatar) => {
    try {
        const resp = await fetch('https://api.escuelajs.co/api/v1/users/', {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                password:password,
                avatar:avatar
            })
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
/** Api for create new user  End */

/** Api for update existing user */
export const UpdateUserById = async (name, email, id) => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}
/** Api for update existing user End*/
