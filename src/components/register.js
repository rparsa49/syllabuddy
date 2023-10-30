import React, { useState } from "react";
import universities from "./universities.json";

const RegistrationPage = () => {
  const [role, setRole] = useState("student");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationError, setRegistrationError] = useState(""); // New state for error message

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

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      role,
      selectedUniversity,
      phoneNumber,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        // User registration was successful, navigate to a success screen
        console.log("User registered successfully");
        setRegistrationError("User registered successfully!"); // Clear any previous error message
      } else if (response.status === 409) {
        // User already exists with the provided email or phone number
        setRegistrationError(
          "An account already exists with this information. Please log in."
        );
      } else {
        // Handle other registration errors
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
              Start Your Syllabuddy Journey...
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
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-text"
                >
                  Enter your phone number:
                </label>
                <input
                  type="text"
                  placeholder="123456789"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  id="phoneNumber"
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
                {registrationError && (
                  <p className="text-red-600">{registrationError}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
