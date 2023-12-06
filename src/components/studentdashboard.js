import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const StudentDashboard = ({ user, onSelect }) => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [professorName, setProfessor] = useState("");
  const [profresponseData, setprofResponseData] = useState([]);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  const [favoriteCourses, setFavoriteCourses] = useState([]);
  var user_id = user.user_name;

  const handleLogout = async () => {
    try {
      const response = await fetch("http://18.191.207.251:8000/logout", {
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

  // Function to handle adding/removing favorite courses
  const handleFavoriteCourse = async (courseID) => {
    try {
      const response = await fetch(
        "http://18.191.207.251:8000/handlefavorite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: user.user_id,
            courseID: courseID,
          }),
        }
      );

      if (response.status === 200) {
        // Update the list of favorite courses
        setFavoriteCourses((prevFavorites) =>
          prevFavorites.includes(courseID)
            ? prevFavorites.filter((id) => id !== courseID)
            : [...prevFavorites, courseID]
        );
      } else {
        console.log("Error handling favorite course");
      }
    } catch (error) {
      console.log("Error handling favorite course:", error);
    }
  };

  const handleSearchCourse = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://18.191.207.251:8000/searchCourse", {
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
    // const [setFirstName, setLastName] = professorName.split(' ');
    try {
      const response = await fetch(
        "http://18.191.207.251:8000/searchProfessor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ professorName: professorName }),
        }
      );
      if (response.status === 200) {
        setprofResponseData(await response.json());


      } else console.log("response data: ", responseData);
    } catch (error) {
      console.log("Error while loading searching professor:", error);
    }
  };

  const handleCourseDisplay = (courseID) => {
    console.log(courseID);
    onSelect(courseID);
    navigate(`/coursedisplay`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-newbg">
      <header className="bg-newsecond text-white p-4">
        <h1 className="text-2xl text-center">Welcome, {user_id}!</h1>
      </header>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl text-newtext font-semibold mb-2">
            Favorite Courses
          </h2>
          <div
            className="bg-newprim text-newtext border border-gray-300 rounded-lg p-4 cursor-pointer"
            onClick={() => navigate("/favorite-courses")}
          >
            {/* Display one or two favorite courses here */}
            <p>Click here to view your favorite courses!</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-newtext  font-semibold mb-2">
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
          <h2 className="text-xl text-newtext font-semibold mb-2">
            Search Results
          </h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="border text-newtext  px-4 py-2">
                    Course Code
                  </th>
                  <th className="border text-newtext px-4 py-2">Course Name</th>
                  <th className="border text-newtext px-4 py-2">
                    Instructor Name
                  </th>
                  <th className="border text-newtext px-4 py-2">Year Term</th>
                  <th className="border text-newtext px-4 py-2">
                    Favorite Course
                  </th>
                  <th className="border text-newtext px-4 py-2">View Course</th>
                </tr>
              </thead>
              <tbody>
                {responseData.map((dataItem, index) => (
                  <tr key={index}>
                    <td className="border text-newtext  px-4 py-2">
                      {dataItem.courseCode}
                    </td>
                    <td className="border text-newtext px-4 py-2">
                      {dataItem.courseName}
                    </td>
                    <td className="border text-newtext px-4 py-2">{`${dataItem.firstName} ${dataItem.lastName}`}</td>
                    <td className="border text-newtext px-4 py-2">
                      {dataItem.yearTerm}{" "}
                    </td>
                    <td className="border px-4 py-2">
                      {" "}
                      <button
                        className={`btn ${
                          favoriteCourses.includes(dataItem.courseID)
                            ? "btn-neutral"
                            : "btn-accent"
                        }`}
                        onClick={() => handleFavoriteCourse(dataItem.courseID)}
                      >
                        {favoriteCourses.includes(dataItem.courseID)
                          ? "Favorited"
                          : "Favorite Course"}
                      </button>
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

        <div className="mb-4">
          <h2 className="text-xl text-newtext font-semibold mb-2">
            Search Results{" "}
          </h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="border text-newtext  px-4 py-2">
                    Course Code
                  </th>
                  <th className="border text-newtext px-4 py-2">Course Name</th>
                  <th className="border text-newtext px-4 py-2">
                    Instructor Name
                  </th>
                  <th className="border text-newtext px-4 py-2">Year Term</th>
                  <th className="border text-newtext px-4 py-2">
                    Favorite Course
                  </th>
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
                        className={`btn ${
                          favoriteCourses.includes(dataItem.courseID)
                            ? "btn-neutral"
                            : "btn-accent"
                        }`}
                        onClick={() => handleFavoriteCourse(dataItem.courseID)}
                      >
                        {favoriteCourses.includes(dataItem.courseID)
                          ? "Favorited"
                          : "Favorite Course"}
                      </button>
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
        </div>
      </div>

      <div className="mt-auto p-4">
        <button className="block btn btn-primary" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
