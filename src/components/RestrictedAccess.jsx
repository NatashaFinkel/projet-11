import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedAccess = () => {
    const token = useSelector(state => state.authentication.token);
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default RestrictedAccess;