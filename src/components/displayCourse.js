import React from "react";

const displayCourse = ({ user }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl text-center">Welcome, {user.firstName}!</h1>
        <h1 className="text-2xl text-center">Welcome, {user.lastName}!</h1>
        <h1 className="text-2xl text-center">Welcome, {user.courseCode}!</h1>
        <h1 className="text-2xl text-center">Welcome, {user.courseName}!</h1>
        <h1 className="text-2xl text-center">Welcome, {user.yearTerm}!</h1>
      </header>
      </div>
  );
};

export default displayCourse;
