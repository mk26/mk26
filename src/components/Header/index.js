import React from 'react'
import './styles.scss'

import Pulse from 'react-reveal/Pulse'
import Fade from 'react-reveal/Fade'
import { ParallaxBanner } from 'react-scroll-parallax'
import jump from 'jump.js'

const Header = () => (
  <div className="header">
    <Fade>
      <ParallaxBanner
        className="header-bg"
        layers={[
          {
            image: require('../../assets/images/header-bg.jpg'),
            amount: 0.2,
            slowerScrollRate: false
          }
        ]}
        style={{
          height: '100vh'
        }}
      >
        <div>
          <Fade bottom cascade duration={400} delay={200}>
            <div className="message">hi!</div>
          </Fade>
          <Pulse forever>
            <span
              onClick={() => jump('.projects')}
              className="down-arrow fa fa-chevron-down"
            />
          </Pulse>
        </div>
      </ParallaxBanner>
    </Fade>
  </div>
)

export default Header
