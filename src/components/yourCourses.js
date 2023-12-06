import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const YourCourses = ({ user, onSelect }) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  // rn buildnp
  // Helper function to fetch courses from the server
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/ViewCoursesByProfessorID?user=${user.user_id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();
      console.log("Your courses: ", data.courses);
      setCourses(data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Use useEffect to fetch courses when the user prop changes
  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line
  }, [user]);

  const handleRemoveFromFavorites = async (userID, courseID) => {
    try {
      // Make a request to the Flask endpoint to remove the course association
      const response = await fetch(
        `http://127.0.0.1:5000/removeCourse?userID=${userID}&courseID=${courseID}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove course association");
      }

      // Refetch the list of courses from the server after removal
      fetchCourses();
    } catch (error) {
      console.error("Error removing course association:", error);
    }
  };

  const handleCourseDisplay = (courseID) => {
    onSelect(courseID);
    navigate(`/coursedisplay`);
  };

  return (
    <div className="bg-background text-gray-900 min-h-screen">
      <header className="bg-newsecond text-white p-4">
        <h1 className="text-2xl text-center">Your Courses</h1>
      </header>
      <div className="p-4">
        {courses.map((course) => (
          <div
            key={course.courseCode}
            className="flex items-center justify-between my-2 border p-2 rounded-md cursor-pointer"
          >
            <Link to={`/coursedisplay`} className="flex-grow">
              <div>
                <span className="font-bold">{course.courseName}</span> -{" "}
                {course.courseCode}
              </div>
              <div>Term: {course.term}</div>
            </Link>
            <button
              onClick={() => handleCourseDisplay(course.courseID)}
              className="text-blue-500 btn-favorite border px-4 py-2 m-2"
            >
              View
            </button>
            <button
              onClick={() =>
                handleRemoveFromFavorites(user.user_id, course.courseID)
              }
              className="text-red-500 btn-favorite border px-4 py-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCourses;
