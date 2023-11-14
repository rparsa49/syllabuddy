import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const StudentDashboard = ({ user }) => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState('');
  const { userID, universityID } = user;
  

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
        navigate("/");
      }
    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  const handleSearch = () => {
    // Check if universityID exists in the user object
    if (user.name) {
      // Navigate to the searchCourse route and pass the courseName in the state
      navigate("/searchCourse", { state: { userID, universityID, courseName } });
    } else {
      // Handle the case where universityID is missing
      console.error("University ID is missing in the user object.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl text-center">Welcome, {user.name}!</h1>
      </header>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">
            Recently Viewed Courses
          </h2>
          <div
            className="bg-white border border-gray-300 rounded-lg p-4 cursor-pointer"
            onClick={() => navigate("/recent-courses")}
          >
            {/* Display one or two recently viewed courses here */}
            <p>Course 1</p>
            <p>Course 2</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Favorite Courses</h2>
          <div
            className="bg-white border border-gray-300 rounded-lg p-4 cursor-pointer"
            onClick={() => navigate("/favorite-courses")}
          >
            {/* Display one or two favorite courses here */}
            <p>Course A</p>
            <p>Course B</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Search for Courses</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Human Condition 1"
              onChange={(e) => setCourseName(e.target.value)}
              className="border border-gray-300 p-2 rounded-l-md w-full"
            />
            <button onClick={handleSearch} className="btn btn-secondary rounded-r-md">
              <FaSearch />
            </button>
          </div>
          {/* <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Search for Professor</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Robin"
              className="border border-gray-300 p-2 rounded-l-md w-full"
            />
            <input
              type="text"
              placeholder="Shoemaker"
              className="border border-gray-300 p-2 rounded-l-md w-full"
            />
            <button className="btn btn-secondary rounded-r-md">
              <FaSearch />
            </button>
          </div>
        </div> */}
        </div>
      </div>
      <div className="mt-auto p-4">
        <button className="block btn btn-secondary" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
