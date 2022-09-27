import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAPI } from "./authSlice";

function AuthLoginForm() {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const doSubmit = (e) => {
        e.preventDefault();
        dispatch(authLoginAPI({ email, password }));
        setEmail('')
        setPassword('')
    };
    return (
        <form name="loginForm" onSubmit={doSubmit}>
            <div className="form-group-collection">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={emailChange} value={email}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={passwordChange} value={password}/>
                </div>
                <input type="submit" value="login" />

                <div className="message">
                    {authState.isLoginPending && <div><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="Loading...."/></div>}
                    {authState.isLoginSuccess && <span>login success</span>}
                    {authState.errorMassage && <span>{authState.errorMassage}</span>}
                </div>
            </div>
        </form>
    )
}

export default AuthLoginForm;