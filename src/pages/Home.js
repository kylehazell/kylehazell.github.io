import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
//import videoCode from '../assets/coding_background.mp4'; this how you connect the import <video src={videoCode} autoPlay loop muted/>
//import {Link} from "react-router-dom";
//import {Mailto} from "../helpers/EmailMe";

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
            I am a software developer with a passion for learning and creating.
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
     </div>
       {/*<div className='overlay'>
        
  </div>*/}
      <div className="skills"> 
          
          <h1>Skills</h1>
          <ol className="list">
            <li className="item">
                <h2>Front-End</h2>
                <span>
                  HTML, CSS, React Native, NPM, Yarn
                </span>
            </li>
            <li className="item">
                <h2>Back-End</h2>
                <span> NodeJS, ExpressJS, MySQL, MS SQL </span>
            </li>
            <li className="item">
                <h2>Languages</h2>
                <span> JavaScript, Java, Python, C, C#, SQL, R</span>
            </li>
        </ol>
    </div>
 </div> 
 )
}

export default Home