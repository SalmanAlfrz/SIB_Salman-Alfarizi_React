import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "login");
        navigate("/items");
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Klik the button to login</p>
            <button className="login-button" onClick={() => handleLogin()}>Login</button>
        </div>
    )

}