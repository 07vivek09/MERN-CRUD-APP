import axios from "axios"

const userUrl = "http://localhost:8000"

export const addUser = async (user) => {
    return await axios.post(`${userUrl}/add`, user);
}

export const getUsers = async () => {
    try {
        return await axios.get(`${userUrl}/all`);
        
    } catch (error) {
        console.log("Error while calling getUsers API", error);
    }
   
}

export const getUser = async (id) => {
    id = id || '';
    return await axios.get(`${userUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${userUrl}/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${userUrl}/${id}`);
}