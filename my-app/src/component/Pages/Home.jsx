import React from "react";
import {  useNavigate } from "react-router-dom";
import "../Navbar.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <div
        className="background-box"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/desk.jpg"})`
        }}
        
      >
        <div className="content">
          <h1>Resume</h1>
          <p>This is my professional resume</p>
        </div>
      </div>

      <div className="dee-content">
        <div
          className="dee-box"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/dee.jpg"})`
          }}
          
        ></div>

        <div className="dee-boxone">
          <h1>Hey, there</h1>
          <p>
            My name is Vadla DEEPIKA. I completed my B.Tech in Electronics and
            Communication Engineering from Gitam University. During my academic
            journey, I developed a keen interest in software development, web
            technologies, and data structures.
          </p>
          <div className="dee-boxtwo">
            <button onClick={handleNavigate}>My Resume</button>
            
          </div>
        </div>
      </div>
    </div>

    
  );
}


















