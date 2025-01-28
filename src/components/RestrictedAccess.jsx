import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RestrictedAccess = () => {
    const token = useSelector(state => state.authentication.token);

    const appBasename = process.env.PUBLIC_URL;

    // if there is a token ( = authenticated user),
    // the component Outlet ( = the route whose access is restricted) is rendered.
    // If there is no token, the user is automatically redirected to the login page.


    return token ? <Outlet /> : <Navigate to={appBasename + "/login"} />
}

export default RestrictedAccess;