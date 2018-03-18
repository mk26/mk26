import React from 'react'
import './styles.css'

import Fade from 'react-reveal/Fade'
import jump from 'jump.js'

const Nav = () => (
  <Fade top duration={400}>
    <div className="nav">
      <div className="nav-header">Karthik</div>
      <div className="nav-items">
        <span onClick={() => jump('.projects')} className="nav-item left">
          Projects
        </span>
        <span
          onClick={() => jump('.about')}
          href="#sectionAbout"
          className="nav-item"
        >
          About
        </span>
        <a href="resume.pdf" className="nav-item right">
          Resume
        </a>
      </div>
    </div>
  </Fade>
)

export default Nav
