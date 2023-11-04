import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Logout was successful, you may clear the user data or perform other necessary actions.
        // For simplicity, we will just navigate back to the home page.
        navigate("/");
      }
    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <h1>Welcome {user.id}!</h1>
      <div className="mb-4 flex justify-center">
        <button className="block btn btn-secondary" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
