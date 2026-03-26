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
            setError("كلمة المرور غير صحيحة")
        }

    }
    return (
        <div className="login-page">
            <div className="login-card">
                <h2>تسجيل الدخول</h2>
                <form onSubmit={handleLogin} >
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <div style={{ position: "relative"}}>
                            <label>البريد الإلكتروني</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Example@gmail.com">

                            </input>
                        </div>
                    </div>


                    <div className="form-group">
                        <label>كلمة المرور</label>
                        <div style={{ position: "relative"}}>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" type={showPassword ? "text" : "password"} style={{ marginBottom: "5px" }}>
                            </input>

                            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", display: "flex", right: "10px", zIndex: "10", background: "transparent" }} > {showPassword ? <FaEyeSlash color="#666" /> : <FaEye color="#666" />} </span>
                        </div>
                        <a href="/" className="forgot-password">نسيت كلمة المرور؟</a>
                    </div>
                    <div>
                        <button type="submit" className="login-btn">تسجيل الدخول</button>
                    </div>
                    <p className="create-account">ليس لديك حساب؟  <a href="/">إنشاء حساب</a></p>
                </form>

            </div>

        </div>


    )
}

export default Login;