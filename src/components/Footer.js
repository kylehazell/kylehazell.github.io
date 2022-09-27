import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia"> 
      <a href="https://www.linkedin.com/in/kyle-h-91a886123/">
        <LinkedInIcon/>
        </a>
        <a href="https://twitter.com/">
        <TwitterIcon/>
        </a>
        <a href="https://www.instagram.com/">
        <InstagramIcon/>
        </a>
        <a href="https://www.facebook.com/">
        <FacebookIcon/>
        </a>
      </div>
   

    <p> &copy; 2022  Kyle Hazell</p>
    
    </div>
  )
}

export default Footer