import React from 'react'
import './styles.css'

import { ParallaxBanner } from 'react-scroll-parallax'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Interests = () => (
  <div className="about-interests">
    <div className="about-title">Interests</div>
    <div className="about-interests-list">
      <div>Development - Web + iOS</div>
      <div>Design - UI/UX, Icon, Graphics</div>
    </div>
  </div>
)

const Experience = () => (
  <div className="about-experience">
    <div className="about-title">Experience</div>
    <div className="about-experience-title">Software Engineer</div>
    <div className="about-experience-info">
      <div className="about-experience-desc">
        Focused on Front-end development
      </div>
      <span className="fa fa-briefcase" />&nbsp;Cisco Systems, Inc.&nbsp;
      <span className="tag time">Since Jul 2015</span>
      <br />
      <span className="fa fa-map-marker" />&nbsp;San Jose, California, USA
    </div>
  </div>
)

const Education = () => (
  <div className="about-education">
    <div className="about-title">Education</div>
    <div className="about-education-title">
      MS - Computer Science and Engineering
    </div>
    <div className="about-education-info">
      <span className="fa fa-graduation-cap" />&nbsp;Santa Clara
      University&nbsp;
      <span className="tag time">2015</span>
      <br />
      <span className="fa fa-map-marker" />&nbsp;California, USA
    </div>

    <div className="about-education-title">
      BE - Computer Science and Engineering
    </div>
    <div className="about-education-info">
      <span className="fa fa-graduation-cap" />&nbsp;Anna University&nbsp;
      <span className="tag time">2013</span>
      <br />
      <span className="fa fa-map-marker" />&nbsp;Chennai, India
    </div>
  </div>
)

const Links = () => (
  <div className="about-links">
    <Zoom delay={250}>
      <a
        href="https://linkedin.com/in/karthik101"
        className="link-btn linkedin"
        title="LinkedIn"
      >
        <span className="fa fa-linkedin-square" />
      </a>
      <a
        href="https://angel.co/karthik-muthusamy"
        className="link-btn angel"
        title="AngelList"
      >
        <span className="fa fa-angellist" />
      </a>
      <a
        href="https://github.com/mk26"
        title="Github"
        className="link-btn github"
      >
        <span className="fa fa-github" />
      </a>
      <a
        href="https://twitter.com/mk26s"
        className="link-btn twitter"
        title="Twitter - @mk26s"
      >
        <span className="fa fa-twitter" />
      </a>
      <a
        href="https://www.instagram.com/_mkarthik_"
        title="Instagram - _mkarthik_"
        className="link-btn instagram"
      >
        <span className="fa fa-instagram" />
      </a>
      <a
        href="resume.pdf"
        data-toggle="tooltip"
        data-placement="top"
        title="Resume"
        className="link-btn resume"
      >
        <span className="fa fa-file-text" />
      </a>
      <a
        href="mailto:hello@mkarthik.me?subject=Hello"
        title="Email - hello@mkarthik.me"
        className="link-btn email"
      >
        <span className="fa fa-envelope" />
      </a>
    </Zoom>
  </div>
)

const About = () => (
  <div className="about">
    <Fade>
      <ParallaxBanner
        className="about-bg"
        layers={[
          {
            image: require('../../assets/images/about-bg.jpg'),
            amount: 0.2
          }
        ]}
        style={{
          height: '24vmax'
        }}
      >
        <div className="about-header">About</div>
      </ParallaxBanner>
    </Fade>
    <Zoom>
      <div className="about-details">
        <Zoom>
          <div className="about-picture" />
        </Zoom>
        <Interests />
        <div className="separator">/ - /</div>
        <Experience />
        <div className="separator">/ - /</div>
        <Education />
        <Links />
      </div>
    </Zoom>
  </div>
)

export default About
