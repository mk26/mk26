import React, { Component, Fragment } from 'react'
import './App.css'

import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'

import 'react-photoswipe/lib/photoswipe.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="content">
          <Header />
          <Projects />
          <About />
        </div>
        <div className="footer">
          © 2018, Karthik Muthusamy&nbsp;&middot;&nbsp;
          <span className="footer-react">
            Made with&nbsp;
            <a
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              React
            </a>
          </span>
        </div>
      </Fragment>
    )
  }
}

export default App
