import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about"> 
        <h2> Welcome to PhalcoHub</h2>
        <div className="prompt"> 
          <p> 
            A software developer with a passion for Art!
          </p>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon /> 
        </div>
      </div>
      <div className="skills">

        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Languages </h2>
            <span> HTML5, CSS3, Javascript, SQL, Ruby, Python</span>
          </li>
          <li className="item">
            <h2> Frameworks </h2>
            <span> React.js and Ruby on Rails </span>
          </li>
          <li className="item">
            <h2> Testing </h2>
            <span> Jest, RSpec, React Testing Library </span>
          </li>
          <li className="item">
            <h2> General </h2>
            <span> 
              Version Control/Git, Github, Postman, PGAdmin, Insomnia, Trello, VSCode, Yarn, NPM, Bootstrap, Agile Methodology, GarageBand, Shopify, Adobe Illustrator, Procreate, PhotoShop, BeatMaker3, Capcut
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;