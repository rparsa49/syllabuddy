import React, { useState, useEffect } from "react";

const CourseDisplayPage = (props) => {
  //console.log(props);
  const [displayData, setDisplayData] = useState({
    courseName: "DUMMY",
    courseCode: "DUMMY",
    averageGrade: "0",
    tags: ["DUMMY", "DUMMY", "DUMMY", "DUMMY", "DUMMY"],
    courseDesc: "DUMMY",
    university: "DUMMY",
    profName: "DUMMY",
    terms: ["DUMMY", "DUMMY", "DUMMY"],
    courseID: "DUMMY",
  });

  // eslint-disable-next-line
  const [tags, setTags] = useState([]);
  const courseID = props;

  useEffect(() => {
    const fetchDisplayData = async (courseID) => {
      try {
        const response = await fetch(
          "https://18.191.207.251:8000/coursedisplay",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseID: courseID }),
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          console.log(data);

          setDisplayData(data);
        } else console.log("display data: ", displayData);
      } catch (error) {
        console.log("Error while loading display page:", error);
      }
    };

    fetchDisplayData(courseID);
    // eslint-disable-next-line
  }, [props, setDisplayData]);

  const handledownloadFile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://127.0.0.1:5000/downloadFile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseID }),
      });

      if (response.status === 200) {
        // Create a blob from the response data
        const blob = await response.blob();

        // Create an anchor element
        const link = document.createElement("a");

        // Set the href attribute to a Blob URL
        link.href = URL.createObjectURL(blob);

        // Set the download attribute with the desired filename
        link.download = "syllabus.pdf";

        // Append the link to the document
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      } else {
        console.log("Error downloading syllabus");
      }
    } catch (error) {
      console.log("Error while handling download:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-newbg">
      <main className="container mx-auto px-6 pt-10 flex-1 h-screen">
        {displayData.courseCode !== "DUMMY" ? (
          <>
            {/* Course name, code, and university name */}
            <div className="text-left mb-5">
              <h1 className="inline-headings text-3xl md:text-4xl lg:text-6xl font-sans font-bold text-newtext">
                {displayData.courseName}
              </h1>
              <h2 className="inline-headings text-xl md:text-2xl lg:text-4xl font-sans text-newtext">
                {displayData.profName}
              </h2>
              <h3 className="text-l md:text-xl lg:text-2xl font-sans mt-2 text-newtext text-left">
                {displayData.university} | {displayData.courseCode} |{" "}
                {displayData.terms}
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
              Syllabus:
              <br></br>
              <button
                className="mt-5 btn-accent btn"
                onClick={handledownloadFile}
              >
                Download
              </button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};
//};

export default CourseDisplayPage;