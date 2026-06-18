import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

function Home() {
  return (
    <div className="Home">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">Kyle Hazell</h1>
            <p className="hero-role">Solutions Engineer</p>
            <p className="hero-bio">
              Solutions Engineer with 5+ years building automation, internal tools, and
              customer-facing technical systems. Experience spans Python data pipelines at
              Tesla, full-stack web tools at SF Department of Public Works, and compliance
              SaaS support at the SF Ethics Commission.
            </p>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/kyle-h-91a886123/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
              <Mailto email="khazell415@gmail.com" subject="I would like to connect" body="Hello Kyle,">
                <EmailIcon />
              </Mailto>
              <a href="https://github.com/kylehazell/" target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              src={process.env.PUBLIC_URL + '/headshot.jpg'}
              alt="Kyle Hazell"
              className="headshot"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.classList.add('headshot-fallback');
              }}
            />
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Front-End</h3>
            <p>HTML, CSS, NPM, Yarn</p>
          </div>
          <div className="skill-card">
            <h3>Back-End</h3>
            <p>NodeJS, ExpressJS, MySQL, MS SQL</p>
          </div>
          <div className="skill-card">
            <h3>Languages</h3>
            <p>JavaScript, Java, Python, SQL</p>
          </div>
          <div className="skill-card">
            <h3>Customer-Facing &amp; Tools</h3>
            <p>REST APIs, Technical Writing, User Training, Jira, Confluence, Salesforce, Linux</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
