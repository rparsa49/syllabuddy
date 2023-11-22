import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FavoriteCourses = ({ user }) => {
  const [favoriteCourses, setFavoriteCourses] = useState([
    { code: "CS101", name: "Introduction to Computer Science" },
    { code: "MATH202", name: "Advanced Mathematics" },
  ]);

  useEffect(() => {
    console.log(user);
    var user_id = user.user_id;
    console.log(user_id)
    // Fetch favorite courses from Flask endpoint with the user parameter
    const fetchFavoriteCourses = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/Viewfavouritecourses?user=${user_id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch favorite courses");
        }

        const data = await response.json();
        setFavoriteCourses(data);
      } catch (error) {
        console.error("Error fetching favorite courses:", error);
      }
    };

    fetchFavoriteCourses();
  }, [user]);

  const handleRemoveFromFavorites = async (courseCode) => {
    try {
      // Make a request to the Flask endpoint to remove the course from favorites
      const response = await fetch("/api/remove-favorite-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseCode }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove course from favorites");
      }

      // Update the state to reflect the removal
      setFavoriteCourses((prevCourses) =>
        prevCourses.filter((course) => course.code !== courseCode)
      );
    } catch (error) {
      console.error("Error removing course from favorites:", error);
    }
  };

  return (
    <div className="bg-background text-gray-900">
      <header className="bg-newsecond text-white p-4">
        <h1 className="text-2xl text-center">Your favorite courses!</h1>
      </header>
      <div className="p-4">
        {favoriteCourses.map((course) => (
          <Link
            key={course.code}
            to={`/course/${course.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="flex items-center justify-between my-2 border p-2 rounded-md cursor-pointer">
              <div>
                <span className="font-bold">{course.name}</span> - {course.code}
              </div>
              <button
                onClick={() => handleRemoveFromFavorites(course.code)}
                className="text-yellow-500"
              >
                ⭐
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;
