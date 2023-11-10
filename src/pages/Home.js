import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <div className="home">
      <div className="about"> 
        <h2> Hi! I'm Paul Gooden and this is my Graphic Design Portfolio. Coded by Your's Truly!</h2>
        <div className="prompt"> 
          <p> 
            Links to My Profiles and Brand Website!
          </p>
          <a target="_blank" rel='nonreferrer' href='https://www.facebook.com/KWURAAT'>
            <FacebookIcon />
          </a>
          <a target="_blank" rel='nonreferrer' href='https://www.instagram.com/kwuraat/'>
            <InstagramIcon />
          </a>
          <a target="_blank" rel='nonreferrer' href='https://www.youtube.com/@kwuraat/featured'>
            <YouTubeIcon />    
          </a>
          <a target="_blank" rel='nonreferrer' href='https://github.com/Phalco1'>
            <GitHubIcon />   
          </a>
          <a target="_blank" rel="nonreferrer" href='https://www.linkedin.com/in/kwuraat/'>
            <LinkedInIcon />
          </a>
          <a target="_blank" rel='nonreferrer' href='https://my-portfolio-1-delta-eqs94066k-phalco1.vercel.app/contact'>
            <EmailIcon /> 
          </a>
          <a target="_blank" rel='nonreferrer' href='http://www.kwuraat.com'>
            <FontAwesomeIcon icon={ faGlobe } /> 
          </a>
          <a target="_blank" rel='nonreferrer' href='https://www.fiverr.com/paulgooden627?up_rollout=true'>
            <FontAwesomeIcon icon={ faPaintBrush } /> 
          </a>
          <a target="_blank" rel='nonreferrer' href='https://www.tiktok.com/@kwuraat'>
            <FontAwesomeIcon icon={ faTiktok } />
          </a>
        </div>
      </div>
      <div className="skills">

        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Design Software </h2>
            <span> Procreate, Adobe Illustrator, Adobe PhotoShop, and Adobe Express.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;