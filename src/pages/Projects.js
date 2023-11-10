import React from "react";
import ProjectItem from "../components/ProjectItem";
import Pacman from '../assets/Pacman.png';
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList.js";

function Projects() {
  return (
    <div className="projects"> 
      <h1> My Personal Projects </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={Pacman} />;
        })}
      </div>
    </div>
  );
}

export default Projects;