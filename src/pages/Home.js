import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
//import videoCode from '../assets/coding_background.mp4'; this how you connect the import <video src={videoCode} autoPlay loop muted/>
//import {Link} from "react-router-dom";
//import {Mailto} from "../helpers/EmailMe"

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

function Home() {
  return (
  
  <div className="Home">
      
      <div className="about">
        <h2> Hi, my name is Kyle</h2>
        <div className="prompt">
          <p> 
            Solutions Engineer with 5+ years building automation, internal tools, and customer-facing technical systems. Experience spans Python data pipelines at Tesla, full-stack web tools at SF Department of Public Works, and compliance SaaS support at the SF Ethics Commission.
          </p>
          <a href="https://www.linkedin.com/in/kyle-h-91a886123/">
            <LinkedInIcon/>
          </a>
          <Mailto email="khazell415@gmail.com" subject="I would like to connect" body="Hello Kyle,">
              <EmailIcon/>
          </Mailto>
         
          <a href="https://github.com/kylehazell/">
            <GithubIcon/>
          </a>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resumeButton">
          View Resume
        </a> 
     </div>
       {/*<div className='overlay'>
        
  </div>*/}
      <div className="skills"> 
          
          <h1>Skills</h1>
          <ol className="list">
            <li className="item">
                <h2>Front-End</h2>
                <span>
                  HTML, CSS, NPM, Yarn
                </span>
            </li>
            <li className="item">
                <h2>Back-End</h2>
                <span> NodeJS, ExpressJS, MySQL, MS SQL </span>
            </li>
            <li className="item">
                <h2>Languages</h2>
                <span> JavaScript, Java, Python, SQL</span>
            </li>
            <li className="item">
                <h2>Customer-Facing &amp; Tools</h2>
                <span> REST APIs, Technical Writing, User Training, Jira, Confluence, Salesforce, Linux</span>
            </li>
        </ol>
    </div>
 </div> 
 )
}

export default Home