import React from 'react'
import './styles.scss'

import Fade from 'react-reveal/Fade'

const Footer = () => (
  <Fade>
    <div className="footer">
      &copy;&nbsp;{new Date().getFullYear()} Karthik
      Muthusamy&nbsp;&middot;&nbsp;
      <span className="footer-react">
        Made with&nbsp;
        <a
          title="ReactJS"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          React
        </a>
      </span>
    </div>
  </Fade>
)

export default Footer
