import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const StudentDashboard = ({ user }) => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [responseData, setResponseData] = useState([]);
  // const [professor, setProfessor] = useState("");
  var user_id = user.user_name;

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

  const handleSearchCourse = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/searchCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseName: courseName }),
      });

      if (response.status === 200) {
        setResponseData(await response.json());
         //console.log(responseData.length);
      } else console.log("response data: ", responseData);
       
    } catch (error) {
      console.log("Error while loading searching courses:", error);
    }
  };

  const handleSearchProfessor = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/searchProfessor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseName: courseName }),
      });

      if (response.status === 200) {
        setResponseData(await response.json());
         //console.log(responseData.length);
      } else console.log("response data: ", responseData);
       
    } catch (error) {
      console.log("Error while loading searching courses:", error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl text-center">Welcome, {user_id}!</h1>
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
              placeholder="Enter a course name or code..."
              onChange={(e) => setCourseName(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
            <button
              onClick={handleSearchCourse}
              className="btn btn-secondary rounded-r-md ml-2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="border px-4 py-2">Course Code</th>
                  <th className="border px-4 py-2">Course Name</th>
                  <th className="border px-4 py-2">Instructor Name</th>
                  <th className="border px-4 py-2">Year Term</th>
                  <th className="border px-4 py-2">Favorite Course</th>
                </tr>
              </thead>
              <tbody>
                {responseData.map((dataItem, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{dataItem.courseCode}</td>
                    <td className="border px-4 py-2">{dataItem.courseName}</td>
                    <td className="border px-4 py-2">{`${dataItem.firstName} ${dataItem.lastName}`}</td>
                    <td className="border px-4 py-2">{dataItem.yearTerm} </td>
                    <td className="border px-4 py-2">
                      {" "}
                      <button className="btn btn-primary">
                        Favorite Course
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2"> Search for Professors </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Matthew Massaia"
              onChange={(e) => setProfessor(e.target.value)}
              className="border border-gray-300 p-2 rounded-l-md w-full"
            />
            <button
              onClick={handleSearchProfessor}
              className="btn btn-secondary rounded-r-md"
            >
              <FaSearch />
            </button>
          </div>
        </div> */}

      {/* <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Professor Searched </h2>
        <div>
          <table>
            <thead>
              <tr>
                <th className="border px-4 py-2">Course Code</th>
                <th className="border px-4 py-2">Course Name</th>
                <th className="border px-4 py-2">Instructor Name</th>
                <th className="border px-4 py-2">Year Term</th>
                <th className="border px-4 py-2">Favorite Course</th>
              </tr>
            </thead>
            <tbody>
              {responseData.map((dataItem, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{dataItem.courseCode}</td>
                  <td className="border px-4 py-2">{dataItem.courseName}</td>
                  <td className="border px-4 py-2">{`${dataItem.firstName} ${dataItem.lastName}`}</td>
                  <td className="border px-4 py-2">{dataItem.yearTerm} </td>
                  <td className="border px-4 py-2"> <button className="btn btn-primary">Favorite Course</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="mt-auto p-4">
        <button className="block btn btn-secondary" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
