import React from "react";
import { Blog } from "./components/Blog";
import { HomePage } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { AboutUs } from "./components/AboutUs";
import { ClaimsApp } from "./components/ClaimsApp";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="blog" element={<Blog />} />
                <Route path="app" element={<ClaimsApp />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
