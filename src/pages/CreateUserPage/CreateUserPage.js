import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";

function CreateUserPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            phone,
            gender
        };
        console.log('New User:', newUser);
        setName('');
        setEmail('');
        setPhone('');
        setGender('')
    };
    const createUser = async (name, email, phone, gender) => {
        axios.post('https://gorest.co.in/public/v2/users', {
            name: name,
            gender: gender,
            email: email,
            status: 'active'
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 6efce080329800de9856dfe46146b77f7af5084be1c57ed18a3bbe0b41e1c5b8'
            }
        })
            .then(response => {
                console.log('User created successfully:', response.data);
                return (<h1>User created successfully</h1>);
            })
            .catch(error => {
                console.error('Error creating user:', error.response.data);
                return (<h1>Error creating user</h1>);
            });
    }
    return (
        <div className="create-user-page">
            <hr />
            <h2>Create User</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" value={gender} onChange={handleGenderChange} />
                </div>
                <button className='btn2' type="submit" onClick={() => createUser(name, email, phone, gender)}>Create</button>
            </form>
            <button id="btn5" onClick={() => navigate("/UserListPage")}>Back</button>
        </div>
    );
}

export default CreateUserPage;
