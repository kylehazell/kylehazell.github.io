import React from 'react'
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css"
//import ReorderIcon from "@material-ui/icons/ReorderIcon";
function Navbar() {


  return  <div className="navbar">
    <div className="toggleButton">
    <button> </button>
    </div>
    <div className ="links"> 
    <Link to="/">Home</Link>   
    <Link to="/projects">Projects</Link>   
    <Link to="/experience">Experience</Link>   
    </div>
   
    </div>
    
  
}

export default Navbar