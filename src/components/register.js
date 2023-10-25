import React, { useState } from "react";
import NavBar from "./navbar"; // Import the NavBar component
import universities from "./universities.json";

const RegistrationPage = () => {
  const [role, setRole] = useState("student");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const userData = {
    email,
    password,
    role,
    selectedUniversity,
  };

  try {
    // todo: replace with actual endpoint name
    const response = await fetch("https://your-api-endpoint.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 201) {
      // User registration was successful, navigate to a success screen
      console.log("User registered successfully");
    } else {
      // Handle registration errors
      console.error("User registration failed");
    }
  } catch (error) {
    console.error("Error while registering user:", error);
  }
};

  return (
    <section id="register">
      <div className="min-h-screen flex flex-col bg-background">
        <div className="geometric-background flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center mb-4 text-primary">
              Syllabuddy Registration
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-text"
                >
                  Select your role below:
                </label>
                <select
                  className="select select-accent w-full max-w-xs"
                  value={role}
                  onChange={handleRoleChange}
                >
                  <option disabled value="">
                    I am a...
                  </option>
                  <option value="student">Student</option>
                  <option value="professor">Professor</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="university"
                  className="block text-sm font-semibold text-text"
                >
                  Select your university below:
                </label>
                <select
                  className="select w-full max-w-xs"
                  value={selectedUniversity}
                  onChange={handleUniversityChange}
                >
                  <option disabled value="">
                    I attend...
                  </option>
                  {universities.map((uni, index) => (
                    <option key={index} value={uni.institution}>
                      {uni.institution}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text"
                >
                  Enter your email:
                </label>
                <input
                  type="text"
                  placeholder="example@example.edu"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-text"
                >
                  Enter your password:
                </label>
                <input
                  type="password"
                  placeholder="Don't share your password!"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-secondary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
