import React, { useState } from "react";
import universities from "./universities.json";

//
const AddCoursePage = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(""); //course.universityID --- university.universityName...we need to store a corresponding course.universityID from the table
  const [courseCode, setCourseCode] = useState(""); //course.courseCode
  const [courseName, setCourseName] = useState(""); //course.courseName
  const [averageGrade, setAverageGrade] = useState(""); //course.averageGrade
  const [courseDesc, setCourseDesc] = useState(""); //course.courseDescription
  const [profFirstname, setProfFirstname] = useState(""); //Professor.firstname
  const [profLastname, setProfLastname] = useState(""); //Professor.lastname
  const [tags, setTags] = useState([]); //course.tags
  const [term, setTerm] = useState(""); //course.term
  const [syllabus, setSyllabus] = useState(null); //course.syllabus
  const [addCourseError, setAddCourseError] = useState("");

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
      const response = await fetch("http://127.0.0.1:5000/addcourse", {
        method: "POST",
        body: formData,
        // Set Content-Type header to let the server know it's form data
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });

      if (response.status === 200) {
        console.log("Course added successfully");
        setAddCourseError("Course added successfully!");
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

  return (
    <div className="min-h-screen flex flex-col bg-newbg">
      <div className="geometric-background flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center mb-4 text-newsecond">
            Add a course
          </h1>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="University"
                className="block text-sm font-semibold text-text"
              >
                Select a university below:
              </label>
              <select
                name="University"
                className="select w-full max-w-xs"
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
                className="block text-sm font-semibold text-text"
              >
                Enter the course code:
              </label>
              <input
                type="text"
                name="courseCode"
                placeholder="Course code...(ABC-123)"
                className="input input-bordered input-accent w-full max-w-xs"
                value={courseCode}
                onChange={handleCourseCodeChange}
              />
            </div>

            <div>
              <label
                htmlFor="courseName"
                className="block text-sm font-semibold text-text"
              >
                Enter the course name:
              </label>
              <input
                type="text"
                name="courseName"
                placeholder="Name of course..."
                className="input input-bordered input-accent w-full max-w-xs"
                value={courseName}
                onChange={handleCourseNameChange}
              />
            </div>

            <div>
              <label
                htmlFor="averageGrade"
                className="block text-sm font-semibold text-text"
              >
                Enter the average grade for this course:
              </label>
              <input
                type="text"
                name="averageGrade"
                placeholder="A percentage"
                className="input input-bordered input-accent w-full max-w-xs"
                value={averageGrade}
                onChange={handleAverageGradeChange}
              />
            </div>

            <div>
              <label
                htmlFor="courseDesc"
                className="block text-sm font-semibold text-text"
              >
                Enter a short description of this course:
              </label>
              <input
                type="text"
                name="courseDesc"
                placeholder="This course is..."
                className="input input-bordered input-accent w-full max-w-xs"
                value={courseDesc}
                onChange={handleCourseDescChange}
              />
            </div>

            <div>
              <label
                htmlFor="profFirstname"
                className="block text-sm font-semibold text-text"
              >
                Enter the firstname of the instructor for this course:
              </label>
              <input
                type="text"
                name="profFirstname"
                placeholder="Firstname"
                className="input input-bordered input-accent w-full max-w-xs"
                value={profFirstname}
                onChange={handleProfFirstnameChange}
              />
            </div>

            <div>
              <label
                htmlFor="profLastname"
                className="block text-sm font-semibold text-text"
              >
                Enter the lastname of the instructor for this course:
              </label>
              <input
                type="text"
                name="profLastname"
                placeholder="Lastname"
                className="input input-bordered input-accent w-full max-w-xs"
                value={profLastname}
                onChange={handleProfLastnameChange}
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-semibold text-text"
              >
                Enter the tags for this course:
              </label>
              <input
                type="text"
                name="tags"
                placeholder="Tag 1, Tag 2, Tag 3, ..."
                className="input input-bordered input-accent w-full max-w-xs"
                value={tags}
                onChange={handleTagsChange}
              />
            </div>

            <div>
              <label
                htmlFor="term"
                className="block text-sm font-semibold text-text"
              >
                Enter the term this course is offered for:
              </label>
              <input
                type="text"
                name="term"
                placeholder="Term"
                className="input input-bordered input-accent w-full max-w-xs"
                value={term}
                onChange={handleTermChange}
              />
            </div>

            <div>
              <label
                htmlFor="syllabus"
                className="block text-sm font-semibold text-text"
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
      </div>
    </div>
  );
};

export default AddCoursePage;
