import React, { useState, useEffect } from "react";
import universities from "./universities.json";

const EditCoursePage = ({ user }) => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = useState("");
  const [averageGrade, setAverageGrade] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [profFirstname, setProfFirstname] = useState("");
  const [profLastname, setProfLastname] = useState("");
  const [tags, setTags] = useState("");
  const [term, setTerm] = useState("");
  const [syllabus, setSyllabus] = useState(null);
  const [addCourseError, setAddCourseError] = useState("");

  const [courses, setCourses] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    var user_id = user.user_id;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/viewcourses?user=${user_id}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setCourses(data.courses);
        } else {
          console.error("Error while fetching courses");
        }
      } catch (error) {
        console.error("Error while fetching courses:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  const handleCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  };

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleAverageGradeChange = (e) => {
    setAverageGrade(e.target.value);
  };

  const handleCourseDescChange = (e) => {
    setCourseDesc(e.target.value);
  };

  const handleProfFirstnameChange = (e) => {
    setProfFirstname(e.target.value);
  };

  const handleProfLastnameChange = (e) => {
    setProfLastname(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSyllabusChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const allowedTypes = ["application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select a PDF-type file for your syllabus.");
      e.target.value = ""; // Clear the file input
      setSyllabus(null);
      return;
    }

    setSyllabus(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsData = {
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    const jsonTagData = JSON.stringify(tagsData);
    
    const formData = new FormData();
    formData.append("selectedUniversity", selectedUniversity);
    formData.append("courseCode", courseCode);
    formData.append("courseName", courseName);
    formData.append("averageGrade", averageGrade);
    formData.append("courseDesc", courseDesc);
    formData.append("profFirstname", profFirstname);
    formData.append("profLastname", profLastname);
    formData.append("tags", jsonTagData);
    formData.append("term", term);
    formData.append("syllabus", syllabus, syllabus.name);
    try {
      console.log(courseID);
      const response = await fetch(
        `http://127.0.0.1:5000/editcourse?courseID=${courseID}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        console.log("Course edited successfully");
        setAddCourseError("Course edited successfully!");
        setEditMode(false); // Switch back to default mode after submitting the form
      } else if (response.status === 400) {
        setAddCourseError(
          "Unable to add course. Please check your input and try again."
        );
      } else if (response.status === 409) {
        setAddCourseError(
          "A course already exists with this course code at this university."
        );
      } else {
        console.error("Error while adding course");
      }
    } catch (error) {
      console.error("Error while adding course:", error);
      setAddCourseError(
        "An unexpected error occurred. Please try again later."
      );
    }
  };

  const handleCourseSelection = (x) => {
    console.log(x);
    setCourseID(x);
    // console.log("The courseID is: ", courseID);
    setEditMode(true);
  };

  useEffect(() => {
    console.log("The courseID is: ", courseID);
    // setEditMode(true);
  }, [courseID]);

  return (
    <div className="min-h-screen bg-newbg">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/2 m-2">
          {editMode ? (
            <form className="space-y-4 max-w-md mx-auto text-center" onSubmit={handleSubmit}>
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-center mb-4 text-newsecond">
                 Edit course
                </h1>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="University"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Select a university below:
                    </label>
                    <select
                      name="University"
                      className="bg-newbg text-newtext select w-full max-w-xs"
                      value={selectedUniversity}
                      onChange={handleUniversityChange}
                    >
                      <option disabled value="">
                        This course is given at...
                      </option>
                      {universities.map((uni, index) => (
                        <option key={index} value={uni.institution}>
                          {uni.institution}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="courseCode"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the course code:
                    </label>
                    <input
                      type="text"
                      name="courseCode"
                      placeholder="Course code...(ABC-123)"
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={courseCode}
                      onChange={handleCourseCodeChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="courseName"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the course name:
                    </label>
                    <input
                      type="text"
                      name="courseName"
                      placeholder="Name of course..."
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={courseName}
                      onChange={handleCourseNameChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="averageGrade"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the average grade for this course:
                    </label>
                    <input
                      type="text"
                      name="averageGrade"
                      placeholder="A percentage"
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={averageGrade}
                      onChange={handleAverageGradeChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="courseDesc"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter a short description of this course:
                    </label>
                    <input
                      type="text"
                      name="courseDesc"
                      placeholder="This course is..."
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={courseDesc}
                      onChange={handleCourseDescChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="profFirstname"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the firstname of the instructor for this course:
                    </label>
                    <input
                      type="text"
                      name="profFirstname"
                      placeholder="Firstname"
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={profFirstname}
                      onChange={handleProfFirstnameChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="profLastname"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the lastname of the instructor for this course:
                    </label>
                    <input
                      type="text"
                      name="profLastname"
                      placeholder="Lastname"
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={profLastname}
                      onChange={handleProfLastnameChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the tags for this course:
                    </label>
                    <input
                      type="text"
                      name="tags"
                      placeholder="Tag 1, Tag 2, Tag 3, ..."
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={tags}
                      onChange={handleTagsChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="term"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Enter the term this course is offered for:
                    </label>
                    <input
                      type="text"
                      name="term"
                      placeholder="Term"
                      className="bg-newbg text-newtext input w-full max-w-xs"
                      value={term}
                      onChange={handleTermChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="syllabus"
                      className="block text-sm font-semibold text-text text-left ml-16"
                    >
                      Select a syllabus in PDF form:
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleSyllabusChange}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-secondary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    {addCourseError && (
                      <p className="text-red-600">{addCourseError}</p>
                    )}
                  </div>
                </form>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-xl text-newtext font-semibold mb-4">Courses:</h2>
              <ul>
                {courses.map((course, index) => (
                  <li
                    key={index}
                    onClick={() => handleCourseSelection(course.courseID)}
                    className="border border-gray-300 p-2 mb-2 rounded-md cursor-pointer flex justify-between items-center"
                  >
                    <div className="flex-grow">
                      <div className="font-semibold text-newtext">
                        {course.courseName} - {course.courseCode}
                      </div>
                      <div className="text-sm text-gray-500">
                        Term: {course.term}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditCoursePage;
