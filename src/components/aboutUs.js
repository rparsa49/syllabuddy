import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-gray-900 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Team WeAreBadAtNames
      </h1>
      <p className="mb-6">
        We are Team WeAreBadAtNames, a group of passionate and highly skilled
        individuals with diverse backgrounds and expertise. Our team is
        dedicated to pushing the boundaries of technology and creating
        innovative solutions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <p className="mb-6">
        As a whole, we bring a wide range of skills and abilities to the table,
        including expertise in AI/ML, operating systems, scripting, database
        management, and full-stack development. We are also proficient in
        various programming languages.
      </p>
      <h3 className="text-xl font-semibold mb-2">Meet Our Team Members:</h3>
      <div className="mb-6 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/roya.jpeg"}
          alt="Roya Parsa"
          className="w-32 h-24 rounded-lg shadow-lg mr-4 rotate-counterclockwise"
        />
        <div>
          <h4 className="text-lg font-semibold">Roya Parsa</h4>
          <p>
            Hi! I'm Roya Parsa, a junior Computer Science major at Adelphi
            University, specializing in Software Engineering. I am also a member
            of the Adelphi Honors College and currently work as a software
            engineer intern at North Atlantic Industries. My experience includes
            full-stack development, mobile development, scripting, and operating
            systems. I've developed pipelined systems for the VxWorks operating
            system, React apps, and automated processes. My current interests
            lie in system programming and operating systems!
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/nhat.jpeg"}
          alt="Nhat Truong"
          className="w-16 h-16 rounded-lg shadow-lg mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">Nhat Truong</h4>
          <p>
            I'm Nhat Truong, a senior majoring in Computer Science and minoring
            in Finance at Adelphi University. My focus is on Software
            Engineering, and I'm also a member of the honors college. I work
            extensively on Machine Learning and Deep Learning in Python and
            Matlab, and I'm currently involved in projects related to EEG signal
            processing and fMRI images of Alzheimer's disease with Psychosis.
            I'm proficient in various programming languages like C, C++, Java,
            Prolog, MySQL, and R.
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/michael.jpeg"}
          alt="Michael Scandiffio"
          className="w-16 h-16 rounded-lg shadow-lg mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">Michael Scandiffio</h4>
          <p>
            My name is Michael Scandiffio and I’m a junior Computer Science
            major at Adelphi University. I am on the Software Engineering track
            and the 4+1 program, and am working towards a minor in Video Game
            Design. I am also a member of the Adelphi University Honors College.
            I have personal experience with scripting and managing projects of
            my own in my spare time with light experience in marketing and PR. I
            consider myself fluent in Java and C++ with additional experience in
            C#, Python 3, and Javascript. My strong suits lie in writing clean,
            efficient, well-documented code as well as time management.
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/jordan.jpeg"}
          alt="Jordan Rivas"
          className="w-16 h-16 rounded-lg shadow-lg mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">Jordan Rivas</h4>
          <p>
            Hi! My name is Jordan Rivas, I am a senior Computer Science major
            with a specialization in Software Engineering. I currently work a
            part-time job coding for a locksmithing company in Hicksville using
            the Legacy system Qantel. I mainly handled creating several forums
            that allow the user to input different types of information
            regarding invoices, truck maintenance, tax information, etc. I made
            sure the test data was correct and well maintained and collaborated
            with groups to debug and create code. Through this job I gained
            proficiency in Front End / Back End development and maintenance.
            Managing, writing, debugging SQL databases. I also have personal
            experience coding 3D various perspective games on Unity and BlueJ.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-6">
        We're excited to connect with you and answer any questions you may have.
        Feel free to get in touch with our team. Roya Parsa will serve as the
        main point of contact. Her email is royaparsa294@gmail.com
      </p>
      <button
        className="bg-primary text-white font-semibold py-2 px-4 rounded-md hover-bg-primary-dark"
        onClick={() => navigate("/")}
      >
        Return Home
      </button>
    </div>
  );
};

export default AboutUs;
