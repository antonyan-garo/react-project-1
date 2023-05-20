import React from 'react';
import { useNavigate } from 'react-router';

function UserDetailsPage({ user }) {
    const navigate = useNavigate();

    return (
        <div className="user-details-page">
            <hr />
            <h2>User Details</h2>
            <hr />
            <div className='parent2'>
                <div >
                    <strong>Name:</strong> {user.name}
                </div>
                <div>
                    <strong>Email:</strong> {user.email}
                </div>
                <div>
                    <strong>Phone:</strong> {user.phone}
                </div>
            </div>
            <button onClick={() => navigate("/CreateUserPage")}>Create users</button>
            <br />
            <button onClick={() => navigate("/UserListPage")}>With</button>
        </div>
    );
}

export default UserDetailsPage;
