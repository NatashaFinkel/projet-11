import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RestrictedAccess from "./RestrictedAccess";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {
    
    function getCurrentUrl() {
        let currentUrl = window.location.origin;
        let routerBasename;

        if (currentUrl === "http://localhost:3000") {
            routerBasename = process.env.PUBLIC_URL;
        } else {
            routerBasename = "https://natashafinkel.github.io/projet-11/"
        }
        return routerBasename;
    };

    const appBasename = getCurrentUrl();

    return (
        <Router
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Header />
            <Routes>
                <Route path={appBasename + "/"} element={<HomePage />} />
                <Route path={appBasename + "/login"} element={<LoginPage />} />
                <Route element={<RestrictedAccess />}>
                    <Route path={appBasename + "/profile"} element={<ProfilePage />} />
                </Route>
            </Routes>
        </Router>
    );
};


export default AppRouter;