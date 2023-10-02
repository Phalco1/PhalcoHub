import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
        <div className="socialmedia"> 
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon /> 
        </div>
        <p> &copy; 2023 KWURAAT.com</p>
    </div>
  );
}

export default Footer;