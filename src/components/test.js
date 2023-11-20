import React, { useState } from "react";


const Test = () => {
  const [responseData, setResponseData] = useState(null);
  const [userID, set_userID] = useState("")


    const handleView = async (e) => {
        
        e.preventDefault();
    
        
    
        try {
          const response = await fetch("http://127.0.0.1:5000/Viewfavouritecourses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userID),
            
            
           
          });
    
          if (response.status === 200 ) {
             responseData = await response.json();
            console.log("Favorite Courses : ", responseData);
            
            
             
          }
        } catch (error) {
          console.log("Error while loading favorite courses:", error );
        }
      };
      
      return(
        <div>

        <div className="mb-4 flex justify-center ">
                  <button
                    className=" block btn btn-secondary "
                    onClick={handleView}
                    type="submit"
                  >
                    View Courses
                  </button>
                  
                </div>
                <input
                    value={userID}
                    onChange={(e) => set_userID(e.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs "
                    type="userID"
                    placeholder="A userID"
                    id="userID"
                    name="userID"
                  />        
      
        
          
          
        


       </div>         
      );

};
export default Test; 