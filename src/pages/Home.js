import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
  <div className="Home">
      <div className="about">
        <h2> Hi, my name is Kyle</h2>
        <div className="prompt">
          <p> 
            A software developer with a passion for learning and creating.
          </p>
        </div> 
     </div>
     <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML,CSS,React Native, NPM
               </span>
        </li>
        <li className="item">
            <h2>Back-End</h2>
            <span> NodeJS, ExpressJS,M ySQL, MS SQL </span>
        </li>
        <li className="item">
            <h2>Languages</h2>
            <span> JavaSCritp, Java, Python,C</span>
        </li>
     </ol>
    </div>
 </div> 
 )
}

export default Home