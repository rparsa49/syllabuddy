import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0,70)
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      password,
      email,
    };

    try {
      const response = await fetch("http://18.191.207.251:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.log("User successfully logged in:", responseData);

        // Update the user state with the user data from the response.
        onLogin(responseData);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error while logging in:", error);
    }
  };

  return (
    <div>
      <section id="login">
        <div className="min-h-screen flex flex-col bg-newbg">
          <div className=" flex-grow flex items-center justify-center">
            <div className="bg-background p-8 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/2">
              <header>
                <h1 className="text-3xl font-semibold text-center mb-10 text-primary">
                  Login to Syllabuddy
                </h1>
              </header>
              <form className="space-y-4 max-w-md mx-auto text-center">
                <div className="mb-10">
                  <label
                    className="block text-sm font-semibold text-text text-left ml-16" 
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs "
                    type="email"
                    placeholder="Enter your email..."
                    id="email"
                    name="email"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold text-text text-left ml-16"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="password"
                    placeholder="Enter your password..."
                    id="password"
                    name="password"
                  />
                </div>

                <div className="mb-4 flex justify-center ">
                  <button
                    className=" block btn btn-primary "
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
