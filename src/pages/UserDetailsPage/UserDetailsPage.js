import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";
import { useParams } from 'react-router-dom';

function UserDetailsPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState([]);

    const getUserData = async () => {
        try {
            const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 6efce080329800de9856dfe46146b77f7af5084be1c57ed18a3bbe0b41e1c5b8'
                }
            });
            setData(response.data);
            console.log('data', data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>User Profile Card</h2>

            <div className="user-details-card">
                <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="John" className='user-details-img' />
                <h1>{data.name}</h1>
                <p className="user-details-title">CEO & Founder, Programmer</p>
                <br />
                <h3>{data.email}</h3>
                <h4>{data.gender}</h4>
                <div style={{ margin: '24px 0' }}>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
            <div className='parDivFore'>
                <button onClick={() => navigate("/UserListPage")}>Back</button>
            </div>
        </>
    );
}

export default UserDetailsPage;
