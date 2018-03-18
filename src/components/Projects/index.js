import React from 'react'
import './styles.css'

import Project from './Project'
import projects from './constants'

import { ParallaxBanner } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'

const Projects = () => (
  <div className="projects">
    <Fade>
      <ParallaxBanner
        className="projects-bg"
        layers={[
          {
            image: require('../../assets/images/projects-bg.jpg'),
            amount: 0.1,
            slowerScrollRate: true
          }
        ]}
        style={{
          height: '36vmax'
        }}
      >
        <div className="projects-header">Projects</div>
      </ParallaxBanner>
    </Fade>
    {projects.map((project) => (
      <Project key={`project-${project.id}`} {...project} />
    ))}
  </div>
)

export default Projects
