import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import LandingPage from "./components/landing";
import RegistrationPage from "./components/register";
import LoginPage from "./components/login";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Set "/home" as the default route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
