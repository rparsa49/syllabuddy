import React from "react";

const Login = () => {
  return (
    <div>
      <header>
        <h1>Login to Syllabuddy</h1>
      </header>
      <section id ="login">
      {
        <form>
         <label for ="email">email</label>
         <input type = "email" placeholder ="email@email.edu" id ="email" name="email"> </input> 
         <label for ="password">password</label>
         <input type = "password" placeholder ="Password shhhh" id ="password" name="password"> </input>  

         </form>


      }</section>
    </div>
  );
};

export default Login;
