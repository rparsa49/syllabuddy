import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = ({onSearch}) => {
 const [courseName, setcourseName] = useState("");
 const navigate = useNavigate();


 const handleSubmit = async (e) => {
   e.preventDefault();


   const userData = {
     courseName,
   };


   try {
     const response = await fetch("http://127.0.0.1:5000/login", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(userData),
     });


     if (response.status === 200) {
       const responseData = await response.json();
       console.log("Search found:", responseData);


       // Update the user state with the user data from the response.
       onSearch(responseData);
       navigate("/displayCourse");
     }
   } catch (error) {
     console.log("Error while searching:", error);
   }
 };


   return (
     <div className="min-h-screen flex flex-col bg-background">
       <header>
         <h1 className="text-center text-black text-lg"> SEARCH PAGE </h1>
       </header>
       <form>
         <div className="mb-10">
           <label
             className="block text-sm font-semibold text-text"
             for="courseName"
           >
             Course Name
           </label>
           <input
             value= {courseName}
             onChange={(e) => setcourseName(e.target.value)}
             className="input input-bordered input-accent w-full max-w-xs "
             placeholder="Human Condition 1"
             id="courseName"
             name="courseName"
           />
         </div>
         <div className="mb-4 flex justify-center">
           <button
             className="block btn btn-secondary"
             onClick= {handleSubmit}
             type="submit"
           >
             Search
           </button>
         </div>
       </form>
     </div>
   );
 };


export default Search;
