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
                date="Aug 2013 - May 2017"
                iconStyle={{background:"#3e497a",color:"#fff" }}
                icon={<SchoolIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Gateway High School, San Francisco, California
              </h3>
              <p>High School Diploma</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="July 2017 - Aug 2017"
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
                Designed and developed professional applications.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="Jun 2018 - Aug 2018"
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
                  Facilitated program profiles for confidential companies.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date=" Oct 2019 - Aug 2021"
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
              Offered mentorship and assistance to over 30 minority male students in 
              their pursuit of higher education. Coordinated brotherhood events, 
              conducted weekly one-on-one meetings, and maintained student contact data
              using Salesforce for efficient access to critical information.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date=" Aug 2017 - May 2022"
                iconStyle={{background:"#3e497a",color:"#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className= "vertical-timeline-element-title"
                > California State University, Sacramento
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor's Degree
                </h4>
                <p>Computer Science and Minor:Mathematics</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--education" 
              date=" Jan 2023 - Jun 2023"
              iconStyle={{background:"#3e497a",color:"#fff" }}
              icon={<SchoolIcon/>}
          >
              <h3 className= "vertical-timeline-element-title"
              > Data Analytics  Apprenticeship - COOP Careers
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
              Evaluated 300+ records in a Digital Marketing campaign using Excel 
              pivot tables and VLOOKUPs to assess impressions, conversions, and 
              sales. Analyzed sales KPIs to identify top and bottom-performing 
              products, and aggregated campaign data for comparison. Leveraged 
              Python, Ruby, and Excel formulas for statistical analysis, and 
              developed interactive dashboards with Tableau for insightful data 
              visualization.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date=" Jul 2023 - Jan 2024"
              iconStyle={{background: "#e9d35b",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Data Engingneer - Tesla
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Fremont, CA
              </h4>
              <p>
              I optimized VBA code for Tesla vehicles, created detailed reports 
              on homologation testing progress, processed over 100 datasets efficiently, 
              collaborated on a Python application for automating data processing, 
              co-led the development of an internal inventory tracking application 
              using the MERN stack with user authentication and permission roles. 
              Additionally, I designed efficiency-enhancing tools like SharePoint 
              and Confluence pages.

              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
              className="vertical-timeline-element--work" 
              date="Jun 2019 - Present"
              iconStyle={{background: "#e9d35b",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className= "vertical-timeline-element-title"
              > Design Trainee - Department of Public Works
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                
                I develop internal websites tailored for city engineers, providing 
                comprehensive technical documentation and training. Additionally, I 
                assist across departments in various IT tasks, including software and 
                hardware installation, while leveraging JavaScript, HTML, SQL, and 
                Google API to build functional web pages. Lastly, I effectively manage 
                a vast repository of over 1000 critical digital and physical documents 
                within the internal city file system.

              </p>
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience