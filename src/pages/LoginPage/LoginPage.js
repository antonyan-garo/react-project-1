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
            <div className="parDivTwo">
                <button onClick={handleClick}>Login</button>
                <br />
                <button onClick={() => navigate("/UserListPage")}>User list</button>
                <br />
                <button onClick={() => navigate("/")}>Back</button>
            </div>
        </div>
    );
}

export default Login;
