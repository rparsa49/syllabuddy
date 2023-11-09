import React, { useState } from "react";


const Test = () => {
  const [responseData, setResponseData] = useState(null);



    const handleView = async (e) => {
        
        e.preventDefault();
    
        
    
        try {
          const response = await fetch("http://127.0.0.1:5000/Viewfavouritecourses", {
            method: "GET",
            
            
            
           
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
                
      
        
          
          
        


       </div>         
      );

};
export default Test; 