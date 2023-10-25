import React from "react";
import RegistrationPage from "./components/register";
import LandingPage from "./components/landing";
import Login from "./components/login";
import NavBar from "./components/navbar";
function App() {
  return (
    <main>
      <NavBar />
      <LandingPage />
    </main>
  );
}

export default App;
