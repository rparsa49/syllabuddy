import React from "react";

export default function Footer() {
    return (
      <footer className="bg-background container mx-auto p-6 flex items-center justify-between text-newtext">
        <p> Built by Team WeAreBadAtNames</p>
        <div className="flex -mx-6">
          <a href="/aboutUs" className="mx-3 hover:opacity-80 duration-150">
            About Us
          </a>
        </div>
      </footer>
    );
};