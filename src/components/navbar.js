import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ isAuthenticated }) {
  return (
    <header className="bg-primary md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font text-text mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold text-secondary">
            Syllabuddy
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-background">
          <Link to="/" className="mr-5 hover:text-accent">
            Home
          </Link>
          <Link to="/register" className="mr-5 hover:text-accent">
            Register
          </Link>
          <Link to="/login" className="mr-5 hover:text-accent">
            Log In
          </Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="mr-5 hover:text-accent">
              Dashboard
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
