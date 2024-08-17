import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/profileSlice";
import { logout } from "../redux/authenticationSlice";
import Image from "./Image";
import headerImg from "../img/argentBankLogo.png";

function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authentication.token);
    const userName = useSelector((state) => state.profile.name.userName);

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch, token]);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {token ? (
                <>
                    <nav className="main-nav">
                        <a className="main-nav-logo" href="/">
                            <Image imgClassName="main-nav-logo-image" imgSrc={headerImg} imgAlt="Argent Bank Logo" />
                            <h1 className="sr-only">Argent Bank</h1>
                        </a>

                        <div className="main-nav-div">
                            <a className="main-nav-item" href="/profile">
                                <i className="fa fa-user-circle"></i>
                                {userName}
                            </a>

                            <a className="main-nav-item" href="/" onClick={handleLogout}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </a>
                        </div>

                    </nav>
                </>
            ) : (
                <nav className="main-nav">
                    <a className="main-nav-logo" href="/">
                        <Image imgClassName="main-nav-logo-image" imgSrc={headerImg} imgAlt="Argent Bank Logo" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </a>

                    <a className="main-nav-item" href="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign in
                    </a>
                </nav>
            )}
        </div>
    );
}

export default Header;