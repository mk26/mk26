import React, { Component, Fragment } from 'react'
import './App.scss'

import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

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
        <Footer />
      </Fragment>
    )
  }
}

export default App
