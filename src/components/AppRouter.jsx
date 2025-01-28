import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RestrictedAccess from "./RestrictedAccess";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {

    function getCurrentUrl() {
        const URL = window.location.origin;
        let appBasename;
        if (URL === "https://natashafinkel.github.io") {
            appBasename = URL + "/P11-version-2/projet-11";
        } else {
            appBasename = "/P-11-version-2/projet-11";
        }
        return appBasename;
    }

    const currentBasename = getCurrentUrl();

    return (
        <Router basename={currentBasename}
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