import React from 'react'
import{VerticalTimeline,
      VerticalTimelineElement,
    } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Fall 2013 - Spring 2017"
                iconStyle={{background:"#3e497a",color:"#fff" }}
                icon={<SchoolIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Gateway High School, San Francisco, California
              </h3>
              <p>High School Diploma</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date=" Fall 2017 - Spring 2022"
                iconStyle={{background:"#3e497a",color:"#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className= "vertical-timeline-element-title"
                > California State University, Sacramento
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor's Degree
                </h4>
                <p>Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="Summer 2017"
              iconStyle={{background: "#e9d35b",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Intern - Computer Science Summer Institute
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Mountain View, CA
              </h4>
              <p>
                Facilitated programming fundamentals directly from Google engineers, 
                Designed and developed professional applications
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="Summer 2018"
              iconStyle={{background: "#e9d35b",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Intern - Silicon Valley Bank
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                  Produced  research on Venture Capitalism, 
                  Assisted with code on small projects using Python, 
                  Facilitated program profiles for confidential companies
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="Fall 2019 - Fall 2021"
              iconStyle={{background: "#e9d35b",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > College Success Coach - Improve Your Tomorrow
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sacramento, CA
              </h4>
              <p>
                Provided help and support for minority men attending college. 
                For example I provided mentorship, schedule brotherhood events, 
                organized weekly 1 on 1 meetings with up to 10 students a week.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="Summer 2019 - Present"
              iconStyle={{background: "#e9d35b",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Intern - Department of Public Works
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Organized and scanned important physical documents into digital,
                Worked on web applications to help optimize company efficiency, 
                Found and fixed errors in the cities’ GIS system with engineers

              </p>
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience