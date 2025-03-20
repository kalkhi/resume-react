
import React from "react";
import "../Navbar.css";

export const About = () => {
  return (
    
    <>

      <div className="education">
        <h2>Education</h2>

        <div className="education-details">
          <div className="education-box">
            <h4>BTECH (2020-2024)</h4>
          </div>
          <div className="educations-box">
            <p>Gitam University | Electronics and Communication Engineering | CGPA: 7.03</p>
          </div>
        </div>

        <div className="education-details">
          <div className="education-box">
            <h4>INTERMEDIATE (2018-2020)</h4>
          </div>
          <div className="educations-box">
            <p>Sri Chaitanya Junior College | M.P.C | CGPA: 9.4</p>
          </div>
        </div>

        <div className="education-details">
          <div className="education-box">
            <h4>SCHOOLING (2018)</h4>
          </div>
          <div className="educations-box">
            <p>Sri Chaitanya Children's Academy | SSC | CGPA: 8.5</p>
          </div>
        </div>
      </div>

      <div className="skills">
      <h2>Skills</h2>
      <div className="skillstwo">
        <div className="skillsone">
          <h4>PROGRAMMING LANGUAGE</h4>
          <p>Java | Python</p>
        </div>
        <div className="skillsone">
          <h4>WEB TECHNOLOGIES</h4>
          <p>REACT JS | CSS | JavaScript|Html</p>
        </div>
      <div className="skillsone">
          <h4>TOOLS/PLATFORMS</h4>
          <p>Github| VScode | Matlab|Microsoft Office</p>
        </div>
        <div className="skillsone">
          <h4>Database</h4>
          <p>SQL</p>
        </div>
    </div>
    </div>

    <div className="project">
      <h2>PROJECTS / OPEN-SOURCE</h2>

      <div className="projecttwo">
        <div className="projectone">
          <h4>RAILWAY TRACK CRACK DETECTION VEHICLE</h4>
          <p1>(IOT And Image Processing)</p1>
          </div>
          <p>
            <ul>
              <li> Designed a cart that detects the cracks in the railway tracks</li>
              <li>Used LED - LDR system to detect the cracks in the tracks</li>
              <li>Improved the accuracy by using Camera and Image processing</li>
            </ul>
          </p>
        </div>
        <div className="projecttwo">
          <div className="projectone">
            <h4>LINE FOLLOWER ROBOT</h4>
            <p1>(Tetrix Prizm)</p1>
          </div>
          <p>
            <ul>
              <li> Line follower robot which will follow a certain path that is determined, done by using IR sensor</li>
            </ul>
          </p>
        </div>
        <div className="projecttwo">
          <div className="projectone">
            <h4>WEATHER MONITERING SYSTEM</h4>
            <p1>(Ardunio UNO and Ardunio IDE)</p1>
          </div>
          <p>
            <ul>
              <li> Built a device that moniters the weather and give the accurate results</li>
              <li>Used sesors like humidity sensor, temperature sesors, Pressure sensor, Rain Sensor</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="certification"> 
        <h2>CERTIFICATIONS</h2>
        <div className="certificationtwo">
          <div className="certificationone">
            <ul>
              <li> Embedded Developer virtual Internship <a href="https://drive.google.com/file/d/1dyyuGmm9oi-aBCZTiaeYwU2jw3eE4yWM/view" target="_blank">- AICTE - EduSkills</a></li>
              <li>Web Development and Designing <a href="https://drive.google.com/file/d/1iMUoQcNAOYVOTomwoSPsgjHkCHkVXqV1/view"target="_blank">- Oyasis Infobite</a></li>
              <li>Java Programming <a href="https://drive.google.com/file/d/1GGapljE1mXJ6oZPsGqgz4TY2dI_G4DM0/view"target="_blank">- Internpe</a> </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="honor">
        <h2>HONORS & AWARDS</h2>
        <div className="honortwo">
          <ul>
            <li>Stood as runner-up in the IOT workshop conducted in the university
            </li>
          </ul>
        </div>
      </div>



     
    </>
  );
};


  




