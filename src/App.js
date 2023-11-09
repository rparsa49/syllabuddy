import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navbar";
import LandingPage from "./components/landing";
import RegistrationPage from "./components/register";
import LoginPage from "./components/login";
import StudentDashboard from "./components/studentdashboard";
import Search from "./components/Search";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={(userData) => setUser(userData)} />}
        />
        <Route
          path="/dashboard"
          element={
            user ? <StudentDashboard user={user} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
