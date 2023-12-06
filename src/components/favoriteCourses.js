import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const FavoriteCourses = ({ user, onSelect }) => {
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    var user_id = user.user_id;
    console.log(user_id);
    // Fetch favorite courses from Flask endpoint with the user parameter
    const fetchFavoriteCourses = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/Viewfavouritecourses?user=${user_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch favorite courses");
        }

        const data = await response.json();
        console.log(data);
        setFavoriteCourses(data);
      } catch (error) {
        console.error("Error fetching favorite courses:", error);
      }
    };

    fetchFavoriteCourses();
  }, [user]);

const handleRemoveFromFavorites = async (userID, courseID) => {
  try {
    // Make a request to the Flask endpoint to remove the course from favorites
    const response = await fetch("http://127.0.0.1:5000/handlefavorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, courseID }),
    });

    if (!response.ok) {
      throw new Error("Failed to remove course from favorites");
    }

    // Refetch the list of favorite courses from the server
    const updatedFavoriteCourses = await fetchFavoriteCourses(userID);

    // Update the state to reflect the new list of favorite courses
    setFavoriteCourses(updatedFavoriteCourses);
  } catch (error) {
    console.error("Error removing course from favorites:", error);
  }
};

// Helper function to fetch favorite courses from the server
const fetchFavoriteCourses = async (userID) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/Viewfavouritecourses?user=${userID}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch favorite courses");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching favorite courses:", error);
    return [];
  }
};

const handleCourseDisplay = (courseID) => {
    console.log(courseID);
    onSelect(courseID);
    navigate(`/coursedisplay`);
  };

  return (
    <div className="bg-background text-gray-900 min-h-screen">
      <header className="bg-newsecond text-white p-4">
        <h1 className="text-2xl text-center">Saved Courses</h1>
      </header>
      <div className="p-4">
        {favoriteCourses.map((course) => (
          <div
            key={course.courseCode}
            className="flex items-center justify-between my-2 border p-2 rounded-md cursor-pointer"
          >
            <Link to={`/coursedisplay`} className="flex-grow">
              <div>
                <span className="font-bold">{course.courseName}</span> -{" "}
                {course.courseCode}
              </div>
              <div>
                Professor: {course.firstName} {course.lastName} | Term:{" "}
                {course.yearTerm}
              </div>
            </Link>
            <button
              onClick={() =>
                handleCourseDisplay(course.courseID)
              }
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

export default FavoriteCourses;
