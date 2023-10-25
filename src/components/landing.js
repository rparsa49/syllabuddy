import React from "react";

const Landing = () => {
  return (
      <div className="min-h-screen flex flex-col text-white">
        <main className= "container mx-auto px-6 pt-16 flex-1 text-center">

          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase mb-8 text-black">
            Welcome!
          </h2>
          
          <h1 className="text-l md:text-2xl lg:text-4xl text-black">
            Syllabuddy is your go-to tool for syllabi and course searching.
          </h1>
          
          <h1 className="text-l md:text-2xl lg:text-4xl text-black">
            To continue, register or log in!
          </h1>

          <div className= "container mx-auto p-6 flex items-center justify-evenly">
          <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            <div className= "flex -mx-4">
            <a href="#login" className="mx-3 hover:opacity-80 duration-150">Log in</a>
            </div>
          </button>
          
          <button className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            <div className= "flex -mx-4">
            <a href="#register" className="mx-3 hover:opacity-80 duration-150">Register</a>
            </div>
          </button>
          </div>
        </main>

        <footer className= "container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-black">
           <p> Built by Team WeAreBadAtNames</p>
           <div className= "flex -mx-6">
            <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a> 
           </div>
        </footer>
      </div>
  );
};

export default Landing;
