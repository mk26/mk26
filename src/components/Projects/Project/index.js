import React, { Component } from 'react'
import './styles.css'
import ProjectView from './ProjectView'

class Project extends Component {
  state = {
    isOpen: false
  }

  onGalleryOpen = () => {
    this.setState({ isOpen: true })
  }

  onGalleryClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <ProjectView
        isGalleryOpen={this.state.isOpen}
        onGalleryOpen={this.onGalleryOpen}
        onGalleryClose={this.onGalleryClose}
        {...this.props}
      />
    )
  }
}

export default Project
