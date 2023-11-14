import React from "react";

const SearchCourse = ({ location }) => {
  const { courseName, universityID, userID } = location.state;

  return (
    <div>
      <h1 className="text-center text-black text-lg">SEARCH PAGE</h1>

      <div>
        <p>Course Name: {courseName}</p>
        <p>University ID: {universityID}</p>
        <p>User ID: {userID}</p>
      </div>
    </div>
  );
};

export default SearchCourse;








//       // const [courseName, setCourseName] = useState("");
//       // const [firstName, setFirstName] = useState("");
//       // const [lastName, setLastName] = useState("");
//       // const [searchResults, setSearchResults] = useState([]);
    
//       const handleSearch = async (e) => {
//         e.preventDefault();
    
//         try {
//           const result = await fetch(`/api/search?courseName=${courseName}&firstName=${firstName}&lastName=${lastName}`);
//           const data = await result.json();
    
//           setSearchResults(data);
//         } catch (error) {
//           console.error("Error fetching search results:", error);
//         }
//       };
    
//       return (
//       <div className="min-h-screen flex flex-col bg-background">
//         <h1 className="text-center text-black text-lg"> SEARCH PAGE </h1>
//       <form onSubmit = {handleSearch} method="get">
//       <div className="mb-10">
//         <label
//           className="block text-sm font-semibold text-text"
//           for="courseName"
//         >
//          Search Course Name
//         </label>
//         <br></br>
//         <input
//           className="input input-bordered input-accent w-full max-w-xs "
//           placeholder="Human Condition 1"
//           id="courseName"
//           name="courseName"
//           value= {courseName}
//           onChange = {(e) => setCourseName(e.target.value)}
//         />
//       </div>
//       <div className="mb-4 flex justify-center">
//         <button
//           className="block btn btn-secondary"
//           type="submit"
//         >
//           Search
//         </button>
//       </div>
//     </form>

//     <form onSubmit={handleSearch} method="get">
//       <div className="mb-10">
//         <label
//           className="block text-sm font-semibold text-text"
//           for="professorName"
//         >
//          Search Professor Name
//         </label>
//         <br></br>
//         <input
//           className="input input-bordered input-accent w-full max-w-xs "
//           placeholder="Robin"
//           id="firstName"
//           name="firstName"
//           value = {firstName}
//           onChange= {(e) => setFirstName(e.target.value)}
//         />
//         <input
//           className="input input-bordered input-accent w-full max-w-xs "
//           placeholder="Shoemaker"
//           id="lastName"
//           name="lastName"
//           value = {lastName}
//           onChange= {(e) => setLastName(e.target.value)}
//         />
//       </div>
//       <div className="mb-4 flex justify-center">
//         <button
//           className="block btn btn-secondary"
//           type="submit"
//         >
//           Search
//         </button>
//       </div>
//     </form>

//       {/* Display search results */}
//       {searchResults.length > 0 && (
//         <div>
//           <h2>Search Results:</h2>
//           <ul>
//             {searchResults.map((result, index) => (
//               <li key={index}>
//                 {result.firstName} {result.lastName}, {result.courseCode}, {result.courseName}, {result.yearTerm}, {result.universityID}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//  );
//};

// export default searchCourse;