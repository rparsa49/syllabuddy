import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// 
const CourseDisplayPage = () => {
    const courseName = "Software Engineering";
    const courseCode = "CSC-440";
    const averageGrade = "88";
    const tags = ["Homework","Mandatory Attendance", "Note-taking", "Group-work", "Open Note Exams"];
    const courseDesc = "Learn how to take on full-stack development in a semester-long group-driven exercise";
    const university = "Adelphi University";
    const profName = "Sixia Chen"
    const terms = ["Fall 2022", "Spring 2023", "Fall 2023"];

        return (
    <div className="min-h-screen flex flex-col bg-newbg">
      <main className="container mx-auto px-6 pt-10 flex-1 h-screen">
        {displayData.courseCode != "DUMMY" ? (
          <>
            {/* Course name, code, and university name */}
            <div className="text-left mb-5">
              <h1 className="inline-headings text-3xl md:text-4xl lg:text-6xl font-sans font-bold text-newtext">
                {displayData.courseName}
              </h1>
              <h2 className="inline-headings text-xl md:text-2xl lg:text-4xl font-sans text-newtext">
                {displayData.profName}
              </h2>
              <h3 className="text-l md:text-xl lg:text-2xl font-sans text-newtext text-left">
                {displayData.university} | {displayData.courseCode}
              </h3>
            </div>

            {/* Course Description */}
            <h1 className="text-l md:text-xl lg:text-3xl pt-1 font-sans mb-4 text-newtext text-left">
              {displayData.courseDesc}
            </h1>

            {/* Course Tags */}
            <div className="text-left">
              {tags.map((tag, index) => (
                <span key={index} className="badge badge-secondary mr-2">
                  {tag}
                </span>
              ))}
            </div>

            {/* Course Average */}
            <div className="text-l md:text-xl lg:text-2xl mt-6 text-newtext text-center mb-5">
              On average, students in this course receive
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
              }}
            >
              <div
                className="radial-progress text-newbg bg-newacc text-newprim-content border-4 border-newacc"
                style={{
                  "--value": displayData.averageGrade,
                  "--thickness": "3px",
                }}
              >
                {displayData.averageGrade}%
              </div>
            </div>

            {/* Available Syllabi */}
            <div className="text-l md:text-xl lg:text-3xl pt-1 font-sans mb-4 text-newtext text-left">
              Available Syllabi:
            </div>

            <div>
                {terms.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow bg-newprim">
                    <input type="radio" name= "my-accordion-2" checked="checked"/>
                    <div className="collapse-title text-xl font-medium text-base-100">
                        {terms[index]} 
                    </div>
                    <div className="collapse-content text-base-100">
                        <a href="TestPDFfile.pdf" download= "syllabus.pdf">
                            <button className="btn btn-warning">
                                Download
                            </button>
                        </a>
                    </div>
                    </div>
                ))}
                
                
            
            </div>
                
            

        </main>
    </div>
  );
};
//};

export default CourseDisplayPage;
