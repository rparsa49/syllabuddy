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
import CourseDisplayPage from "./components/coursedisplay";
import AddCoursePage from "./components/addcourse";
import Test from "./components/test";
import AboutUs from "./components/aboutUs";
import FavoriteCourses from "./components/favoriteCourses";
import ProfessorDashboard from "./components/professorDashboard";

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
        <Route path="/test" element={<Test />} />
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
