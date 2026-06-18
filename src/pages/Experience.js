import React from 'react'
import{VerticalTimeline,
      VerticalTimelineElement,
    } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Dec 2024 - Present"
              iconStyle={{background: "#1F2A55",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                Technical Support Specialist — SF Ethics Commission
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA · Hybrid
              </h4>
              <p>
                Provide technical support and compliance assistance for e-filing
                systems covering campaign finance and lobbying disclosures. Manage
                support tickets, diagnose filing issues, and collaborate with internal
                teams on complex technical problems. Develop public datasets and
                compliance materials. Conduct training sessions and create fact sheets,
                FAQs, and eLearning modules. Developed Python scripts to audit
                WordPress pages for missing image alt text, supporting the City's ADA
                compliance initiatives.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2019 - Jul 2024"
              iconStyle={{background: "#1F2A55",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                Design Trainee — SF Department of Public Works
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Develop internal websites for city engineers with technical
                documentation and training. Assist across departments on IT tasks
                including software and hardware installation. Leverage JavaScript,
                HTML, SQL, and Google API to build functional web pages. Manage a
                repository of 1,000+ critical digital and physical documents.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jul 2023 - Jan 2024"
              iconStyle={{background: "#1F2A55",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                Data Engineering Analyst — Tesla (Contract)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Fremont, CA
              </h4>
              <p>
                Updated and debugged the VBA codebase to streamline organization of
                crucial vehicle data including test results, GPS, and firmware details.
                Built a Python application that automated data processing, reducing
                turnaround from weeks to minutes across 100+ datasets. Co-led
                development of an internal MERN stack inventory tracking app with user
                authentication and permission roles. Designed SharePoint pages and
                Confluence pages integrated with Jira for test tracking.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Feb 2023 - Jun 2023"
              iconStyle={{background:"#475569",color:"#fff" }}
              icon={<SchoolIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                Data Analyst Fellow — COOP Careers
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Data Analytics Certification
              </h4>
              <p>
                Evaluated 300+ records in a digital marketing campaign using Excel
                pivot tables and VLOOKUPs to determine impressions, conversions, and
                calculated fields. Refined SQL proficiency to manage and analyze
                databases. Analyzed campaign KPIs to identify best and worst product
                performance. Used Python and Ruby for statistical computing. Built
                dashboards and data visualizations — stacked bar graphs, line graphs,
                and pie charts — in Tableau.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Oct 2019 - Aug 2021"
              iconStyle={{background: "#1F2A55",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                College Success Coach — Improve Your Tomorrow
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sacramento, CA
              </h4>
              <p>
                Provided mentorship and support for minority men attending college.
                Organized brotherhood events and held weekly 1-on-1 meetings with
                up to 10 students per week.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2018 - Aug 2018"
              iconStyle={{background: "#1F2A55",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                Intern — Silicon Valley Bank
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Produced research on Venture Capitalism. Assisted with code on
                small projects using Python. Facilitated program profiles for
                confidential companies.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Aug 2017 - May 2022"
                iconStyle={{background:"#475569",color:"#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                  California State University, Sacramento
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor's Degree
                </h4>
                <p>Computer Science</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jul 2017 - Aug 2017"
              iconStyle={{background: "#1F2A55",color:"#fff" }}
              icon={<WorkIcon/>}
            >
              <h3 className="vertical-timeline-element-title">
                Intern — Computer Science Summer Institute (Google)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Mountain View, CA
              </h4>
              <p>
                Learned programming fundamentals directly from Google engineers.
                Designed and developed professional applications.
              </p>
            </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience
