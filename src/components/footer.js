import React from "react";

export default function Footer() {
    return (
      <footer className="container mx-auto p-6 flex items-center justify-between text-newtext">
        <p> Built by Team WeAreBadAtNames</p>
        <div className="flex -mx-6">
          <a href="/aboutUs" className="mx-3 hover:opacity-80 duration-150">
            About us
          </a>
          <a href="/aboutUs" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    );
};