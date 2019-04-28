import React, { useState, useEffect } from 'react'
import './styles.scss'

import Fade from 'react-reveal/Fade'
import jump from 'jump.js'
import throttle from 'lodash/throttle'

const scrollHandler = throttle((setScrollY, scrollY, setCompressNav) => {
  setScrollY(
    Math.min(window.scrollY, document.body.offsetHeight - window.innerHeight)
  )
  setCompressNav(scrollY > window.scrollY || scrollY <= 0 ? false : true)
}, 200)

const Nav = () => {
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [compressNav, setCompressNav] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      scrollHandler(setScrollY, scrollY, setCompressNav)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  return (
    <Fade top duration={400}>
      <div className={`nav ${compressNav ? 'compressed' : ''}`}>
        <div className="nav-header">Karthik</div>
        <div className="nav-items">
          <span onClick={() => jump('.projects')} className="nav-item">
            Projects
          </span>
          <span onClick={() => jump('.about')} className="nav-item">
            About
          </span>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            className="nav-item"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </Fade>
  )
}

export default Nav
