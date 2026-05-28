import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/kyle-h-91a886123/" target="_blank" rel="noreferrer">
          <LinkedInIcon/>
        </a>
        <a href="https://github.com/kylehazell" target="_blank" rel="noreferrer">
          <GitHubIcon/>
        </a>
      </div>
      <p> &copy; 2026 Kyle Hazell</p>
    </div>
  )
}

export default Footer
