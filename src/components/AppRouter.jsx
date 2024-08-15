import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;