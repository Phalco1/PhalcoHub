import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa, faComputer, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import "../styles/Experience.css"



function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline  lineColor="#ffe745">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="September 2019 - March 2023"
        iconStyle= {{ background: "#ffe745", color: "#f0000" }} 
        icon={<FontAwesomeIcon icon={ faFlagUsa } />}
        > 
          <h3 className="vertical-timeline-element-title">
          US NAVY Mechanical and Technical Training 
          <br/>     
          <br/>     
          Completed training in mechanics, nuclear theories, steam propulsion, auxilary machinery. Successfully passed weekly assessments and training requirements.

          </h3>
          <p>Mechanical Maintenance USMAPS/US Department of Labors</p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="May 2023 - Sept 2023"
        iconStyle= {{ background: "#ffe745", color: "#f0000" }} 
        icon={<FontAwesomeIcon icon={ faComputer } />}
        > 
          <h3 className="vertical-timeline-element-title">
          LEARN Academy, San Diego, CA (Remote) 
          <br/>     
          <br/>     
          Completed 640 hours of Full Stack Software Development Bootcamp, using JavaScript libraries and Ruby on Rails and completing 4 full stack projects through individual, paired, and mob programming.

          </h3>
          <p>Certificate of Completion - Full-Stack Web Developer</p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="Aug 1, 2023 - September 1, 2023"
        iconStyle= {{ background: "#ffe745", color: "#f0000" }} 
        icon={<FontAwesomeIcon icon={ faBriefcase } />}
        > 
          <h3 className="vertical-timeline-element-title">
          Coach.Me, San Fancisco, CA (Remote)
          <br/>     
          <br/>     
          Resolved known technical issues with the user experience using Ruby 2.7.8 and MySQL@5.7, allowing subscribers to successfully input credit card information into the database.
          <br/>
          <br/>
          Gained experience working with the Stripe API and website integration. 
          </h3>
          
        
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;