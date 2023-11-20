import React, { useState } from "react";
import universities from "./universities.json";

const RegistrationPage = () => {
  const [userType, setUserType] = useState("");
  const [University, setSelectedUniversity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
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
      userType,
      University,
      phoneNumber,
      firstName,
      lastName,
      userName,
    };

    console.log("User Data:", userData);

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
        setRegistrationError("User registered successfully!");
      } else if (response.status === 400) {
        // Bad request (e.g., missing fields)
        setRegistrationError("Unable to register user. Please try again.");
      } else if (response.status === 409) {
        // User already exists with the provided email or phone number
        setRegistrationError(
          "An account already exists with this information."
        );
      } else {
        // Handle other registration errors
        console.error("Error while registering user");
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
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="userType"
                  className="block text-sm font-semibold text-text"
                >
                  Select your role below:
                </label>
                <select
                  className="select select-accent w-full max-w-xs"
                  value={userType}
                  onChange={handleUserTypeChange}
                  name="userType"
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
                  htmlFor="University"
                  className="block text-sm font-semibold text-text"
                >
                  Select your university below:
                </label>
                <select
                  name="University"
                  className="select w-full max-w-xs"
                  value={University}
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
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-text"
                >
                  Enter your first name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-text"
                >
                  Enter your last name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-semibold text-text"
                >
                  Enter your user name (This will be what you use to login!):
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Your username!"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={userName}
                  onChange={handleUserNameChange}
                />
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
                  name="email"
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
                  name="phoneNumber"
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
                  name="password"
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
