import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass , setPass ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
 
  return (
    <div>
      
      <section id ="login">
      <div className="min-h-screen flex flex-col bg-background">
        <div className=" flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/2">
          <header>
              <h1 className="text-3xl font-semibold text-center mb-10 text-primary">Login to Syllabuddy</h1>
          </header>
        <>
        <form>
          <div className = "mb-10">
         <label className="block text-sm font-semibold text-text" for="email">Email:</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)} 
         className="input input-bordered input-accent w-full max-w-xs " 
         type="email" 
         placeholder="email@email.edu" 
         id="email" 
         name="email"/> 
         </div>
         
        <div className = "mb-4">
         <label className="block text-sm font-semibold text-text" for="password">Password:</label>
         <input value={pass} onChange={(e) => setPass(e.target.value)} 
         className="input input-bordered input-accent w-full max-w-xs" 
         type="password" 
         placeholder="Password shhhh" 
         id="password" 
         name="password"/>  
         </div>

        <div className = "mb-4 flex justify-center ">
         <button className=" block btn btn-secondary " type = "submit">  Log In </button>
         </div>
         </form>
         <div className ="mb-4 flex justify-center">
         <button className=" block btn btn-primary">  Don't have an account? Register Here </button>
         </div>
        </>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default Login;
