import React from 'react';
import "../Navbar.css"; // Your CSS file

const Contact = () => {
  return (
    <>
    <div className='contacttop'>
    <div 
      className="contact" 
      style={{ backgroundImage: "url('/contactme.jpg')", 
        height: '100vh',
        backgroundSize: 'cover',
        margin: 0,
        padding: 0  }}
    >
      <div className="contact-content">
        <h2>Contact</h2>
      </div>
      <div className='contactinfo'>
        <ul>
        <li><i class="fa-regular fa-envelope" 
        style={{ fontSize: '30px', padding: '2%' }}></i><b>EMAIL ADDRESS:</b>vadladeepika944@gmail.com</li>
        <li><i class="fa-solid fa-phone-volume"
        style={{ fontSize: '30px', padding: '2%' }}></i><b>CONTACT NUMBER:</b>6281408869</li>
        </ul>
      </div>
      <div className='contactinfone'>
        <h4>SOCIALMEDIA ADDRESS</h4>
      </div>
      <div className='contactinfotwo'>
        <ul>
        <li>
           <i className="fa-brands fa-linkedin" style={{ fontSize: '30px', padding: '2%' }}></i>
           <b>LinkedIn: </b>
           <a href="http://linkedin.com/in/vadla-deepika-4a53a8229" target="_blank" rel="noopener noreferrer">
             VADLA DEEPIKA
           </a>
        </li>
        <li>
           <i className="fa-brands fa-github" style={{ fontSize: '30px', padding: '2%' }}></i>
           <b>GitHub: </b>
           <a href="https://github.com/kalkhi" target="_blank" rel="noopener noreferrer">
           Kalkhi
          </a>
          </li>


        </ul>
      </div>
    </div>
    </div>

    </>
  );
}

export default Contact;

