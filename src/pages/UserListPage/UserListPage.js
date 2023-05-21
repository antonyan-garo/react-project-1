import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function UserListPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const getUserList = async () => {
        try {
            const response = await axios.get("https://gorest.co.in/public/v2/users", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 6efce080329800de9856dfe46146b77f7af5084be1c57ed18a3bbe0b41e1c5b8'
                }
            });
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div className="user-list-page">
            <hr />
            <h2>Users List</h2>
            <hr />
            <div className='parentDivThree'>
                <button onClick={() => navigate("/CreateUserPage")}>Create user</button>
                <br />
                <button onClick={() => navigate("/LoginPage")}>Back</button>
            </div>
            {data.map((user, i) => (
                <div className="card">
                    <div className="card_background_img" style={{ background: `url("https://source.unsplash.com/random/800x800/?img=${i}")` }}></div>
                    <div className="card_profile_img"></div>
                    <div className="user_details">
                        <h3>{user.name}</h3>
                        <p>Programmer</p>
                    </div>
                    <div className="card_count">
                        <div className="count">
                            <div className="fans">
                                <h3>{Math.floor(Math.random() * 1000)}</h3>
                                <p>Fans</p>
                            </div>
                            <div className="following">
                                <h3>{Math.floor(Math.random() * 100)}</h3>
                                <p>Followings</p>
                            </div>
                            <div className="post">
                                <h3>{Math.floor(Math.random() * 500)}</h3>
                                <p>Posts</p>
                            </div>
                        </div>
                        <div className="btn" onClick={() => navigate(`/UserDetailsPage/${user.id}`)}>More Details</div>
                    </div>
                </div>
            ))
            }

        </div>
    );
}

export default UserListPage;
