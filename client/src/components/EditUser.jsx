import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, editUser } from '../services/api';


const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }


    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <Container >
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name}  />
            </FormControl>
            <FormControl>
                <InputLabel >Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username}  />
            </FormControl>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email}  />
            </FormControl>
            <FormControl>
                <InputLabel >Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone}  />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()} >Edit User</Button>
            </FormControl>
        </Container>
        </>
    )
}

export default EditUser; 