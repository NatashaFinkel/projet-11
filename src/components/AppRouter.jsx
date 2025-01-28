import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RestrictedAccess from "./RestrictedAccess";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {
    const url = process.env.PUBLIC_URL;
    console.log(url);
    return (
        <Router basename="P-11-version-2/projet-11"
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<RestrictedAccess />}>
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </Router>
    );
};


export default AppRouter;