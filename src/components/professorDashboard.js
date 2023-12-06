import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ProfessorDashboard = ({ user, onSelect }) => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [profresponseData, setProfResponseData] = useState([]);
  const [professorName, setProfessor] = useState("");

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
        console.log(responseData);
      } else console.log("response data: ", responseData);
    } catch (error) {
      console.log("Error while loading searching courses:", error);
    }
  };

  const handleSearchProfessor = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/searchProfessor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ professorName: professorName }),
        }
      );

      if (response.status === 200) {
        setProfResponseData(await response.json());
      } else console.log("response data: ", responseData);
    } catch (error) {
      console.log("Error while loading searching courses:", error);
    }
  };

  const handleCourseDisplay = (courseID) => {
      console.log(courseID);
      onSelect(courseID);
      navigate(`/coursedisplay`);
    };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-newsecond text-white p-4">
        <h1 className="text-2xl text-center">Welcome, {user_id}!</h1>
      </header>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-newtext">
            Your courses
          </h2>
          <div
            className="bg-newprim text-newtext border border-gray-300 rounded-lg p-4 cursor-pointer"
            onClick={() => navigate("/your-courses")}
          >
            <p>Click here to view the courses you have taught!</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-newtext">
            Search for Courses
          </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter a course name or code..."
              onChange={(e) => setCourseName(e.target.value)}
              className="border border-gray-300 text-newtext p-2 rounded-md w-full"
            />
            <button
              onClick={handleSearchCourse}
              className="btn btn-accent rounded-md ml-2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-newtext">
            Search Results
          </h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-newtext">Course Code</th>
                  <th className="border px-4 py-2 text-newtext">Course Name</th>
                  <th className="border px-4 py-2 text-newtext">
                    Instructor Name
                  </th>
                  <th className="border px-4 py-2 text-newtext">Year Term</th>
                  <th className="border px-4 py-2 text-newtext">View Course</th>
                </tr>
              </thead>
              <tbody>
                {responseData.map((dataItem, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-newtext">
                      {dataItem.courseCode}
                    </td>
                    <td className="border px-4 py-2 text-newtext">
                      {dataItem.courseName}
                    </td>
                    <td className="border px-4 py-2 text-newtext">{`${dataItem.firstName} ${dataItem.lastName}`}</td>
                    <td className="border px-4 py-2 text-newtext">
                      {dataItem.yearTerm}{" "}
                    </td>
                    <td className="border px-4 py-2 text-newtext">
                      {" "}
                      <button
                        className={"btn btn-primary"}
                        onClick={() => handleCourseDisplay(dataItem.courseID)}
                      >
                        View Course
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-newtext font-semibold mb-2">
            Search for Professors
          </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter a professor's name..."
              onChange={(e) => setProfessor(e.target.value)}
              className="border border-gray-300 text-newtext p-2 rounded-md w-full"
            />
            <button
              onClick={handleSearchProfessor}
              className="btn btn-accent rounded-md ml-2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="border text-newtext  px-4 py-2">Course Code</th>
              <th className="border text-newtext px-4 py-2">Course Name</th>
              <th className="border text-newtext px-4 py-2">Instructor Name</th>
              <th className="border text-newtext px-4 py-2">Year Term</th>
              <th className="border text-newtext px-4 py-2">View Course</th>
            </tr>
          </thead>
          <tbody>
            {profresponseData.map((dataItem, index) => (
              <tr key={index}>
                <td className="border text-newtext  px-4 py-2">
                  {dataItem.courseCode}
                </td>
                <td className="border text-newtext px-4 py-2">
                  {dataItem.courseName}
                </td>
                <td className="border text-newtext px-4 py-2">{`${dataItem.firstName} ${dataItem.lastName}`}</td>
                <td className="border text-newtext px-4 py-2">
                  {dataItem.term}{" "}
                </td>
                <td className="border px-4 py-2">
                  {" "}
                  <button
                    className={"btn btn-primary"}
                    onClick={() => handleCourseDisplay(dataItem.courseID)}
                  >
                    View Course
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-auto p-4">
        <Link to="/addcourse" className="btn btn-primary">
          Add Courses
        </Link>
      </div>
      <div className="mt-auto p-2">
        <Link to="/editcourses" className="btn btn-primary ml-2">
          Edit Courses
        </Link>
      </div>
      <div className="mt-auto p-4">
        <button className="block btn btn-primary" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
