import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync } from "../redux/authenticationSlice";
import Button from "../components/Button";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.authentication);

    const appBasename = process.env.PUBLIC_URL;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAsync({ email, password, rememberMe }))
            .unwrap()
            .then(() => {
                navigate(appBasename + "/profile");
            })
            .catch(() => { });
    };
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="email" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} autoComplete="on" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <Button btnClassName="btn sign-in-button" btnTxt="Sign in" btnDisabled={loading} btnOnClick={handleSubmit} />
                </form>
            </section>
        </main>
    );
};

export default LoginPage;