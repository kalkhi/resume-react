import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <>
    <div className="home-container">
      <div 
        className="background-box"
        style={{ backgroundImage: "url('/desk.jpg')" }} 
      >
        <div className="content">
          <h1>Resume</h1>
          <p>This is my professional resume</p>
        </div>
      </div>

      <div className="dee-content">
        <div 
          className="dee-box"
          style={{ backgroundImage: "url('/dee.jpg')" }} 
        >
        </div>

        <div className="dee-boxone">
          <h1>Hey,there</h1>
          <p>My name is Vadla DEEPIKA .I Completed My Btech In The Stream Of Electronics And Communication Engineering From Gitam University.During my academic journey, I developed a keen interest in software development, web technologies, and data structures. My technical expertise includes Java, React, SQL, and problem-solving, which I continuously improve through hands-on projects and competitive programming.</p>
          <div className='dee-boxtwo'>
          <button onClick={handleNavigate}>My Resume</button>
          </div>
        </div>  
      </div>
    </div>
    </>
  );
}















