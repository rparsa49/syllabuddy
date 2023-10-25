import React from "react";

// todo: use react-dom to route to pages for single page application

export default function NavBar() {
  return (
    <header className="bg-primary md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font text-text mb-4 md:mb-0">
          <a href="#title" className="ml-3 text-2xl font-bold text-secondary">
            Syllabuddy
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-background">
          <a href="#home" className="mr-5 hover:text-accent">
            Home
          </a>
          <a href="#register" className="mr-5 hover:text-accent">
            Register
          </a>
          <a href="#login" className="mr-5 hover:text-accent">
            Log In
          </a>
        </nav>
      </div>
    </header>
  );
}
