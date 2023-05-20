import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeName = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate("");

    const handleClick = () => {
        if (email === "lorem@.com" && password === "ipsum") {
            navigate("/UserListPage");
        } else {
            alert("try agein")
        }
        setEmail("");
        setPassword("");
    }

    return (
        <div className="parentDiv">
            <hr />
            <h2>Login</h2>
            <hr />
            <form>
                <input type="text" placeholder="email" onChange={changeName} value={email} />
                <br />
                <input type="password" placeholder="password" onChange={changePassword} value={password} />
            </form>
            <br />
            <button onClick={handleClick}>Login</button>
            <br />
            <button onClick={() => navigate("/UserListPage")}>User list</button>
            <br />
            <button onClick={() => navigate("/")}>With</button>
        </div>
    );
}

export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// function LoginPage() {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // navigate("/UserListPage");
//     };

//     return (
//         <div className="login-page">
//             <hr />
//             <h2>Login</h2>
//             <hr />
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" value={email} onChange={handleEmailChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//                 </div>
//                 <button className="btn1" type="submit">Login</button>
//             </form>

//             <button onClick={() => navigate("/UserListPage")}>User list</button>
//             <br />
//             <button onClick={() => navigate("/")}>With</button>
//         </div>
//     );
// }

// export default LoginPage;
