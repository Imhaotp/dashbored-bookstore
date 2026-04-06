import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault()

        if (email === "admin@learn.com" && password === "admin123456") {
            setIsLoggedIn(true);
            navigate("/dashbored")
        } else {
            setError("Please enter both email and pasword.")
        }

    }
    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome back</h2>
                <p>Enter your credentials to access the admin dashboard</p>
                <form onSubmit={handleLogin} >
                    {error &&
                        <div className="error-message">
                            <strong>Validation Error</strong>
                            <p>{error}</p>
                        </div>}

                    <div className="input-group" style={{ position: "relative", width: "100%", margin: "10px 0" }}>
                        <label> Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Example@gmail.com">

                        </input>
                    </div>



                    <div className="input-group" style={{ position: "relative", width: "100%", margin: "10px, 0" }}>

                        <label>Password</label>

                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" type={showPassword ? "text" : "password"} style={{ marginBottom: "5px" }}>
                        </input>

                        <span className="password-toggle" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", display: "flex", top:"20%", height: "100%", alignItems: "center", zIndex: "10", background: "transparent", right: "12px" }} > {showPassword ? <FaEyeSlash color="#666" /> : <FaEye color="#666" />} </span>
                    </div>
                    <button type="submit" className="login-btn">Login</button>

                </form>
                <div className="demo">
                    <p><strong>Demo credentials:</strong></p>
                    <p>Email: admin@learn.com</p>
                    <p>Password: admin123456</p>
                </div>

            </div>
            <div className="MyBook">
                <h1 style={{marginBottom: "10px"}}>My Book</h1>
                <p>Manage your e-commerce store with ease. Track orders, manage products, and analyze your sales all in one place.</p>
            </div>

        </div>


    )
}

export default Login;