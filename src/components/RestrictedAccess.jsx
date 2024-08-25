import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RestrictedAccess = () => {
    const token = useSelector(state => state.authentication.token);

    //  Si le token existe ( = utilisateur authentifié),
    //  le composant Outlet ( = la route dont l'accès est protégé) est restitué.
    //  Si le token n'existe pas, l'utilisateur est automatiquement redirigé vers la page login.
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default RestrictedAccess;