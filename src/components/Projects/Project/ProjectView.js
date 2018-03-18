import React from 'react'

import Zoom from 'react-reveal/Zoom'
import { PhotoSwipeGallery } from 'react-photoswipe'

const Logo = ({ id, logo }) => (
  <img
    className={`logo ${id}`}
    src={require(`../../../assets/images/projects/logos/${logo}.png`)}
    alt={logo}
  />
)

const Tags = ({ time, teamSize, tags }) => (
  <div className="tags">
    <span className="tag time">
      <span className="fa fa-calendar" />&nbsp;{time}
    </span>
    {teamSize && (
      <span className="tag team-size">
        <span className="fa fa-user" />&nbsp;Team of {teamSize}
      </span>
    )}
    {tags &&
      tags.map((tag, i) => (
        <span key={`tag-${i}`} className="tag tech">
          {tag}
        </span>
      ))}
  </div>
)

const SourceLink = ({ source }) => (
  <div className="source">
    {source && (
      <a href={source} className="button">
        <span className="fa fa-github" />&nbsp;View on GitHub
      </a>
    )}
  </div>
)

const ProjectView = ({
  id,
  title,
  logo,
  source,
  time,
  teamSize,
  tags,
  description,
  images,
  isGalleryOpen,
  onGalleryOpen,
  onGalleryClose
}) => (
  <Zoom>
    <div className={`project ${id}`}>
      <div className="title">{title}</div>
      <Logo id={id} logo={logo} />
      <div className="description">{description}</div>
      <SourceLink source={source} />
      <Tags time={time} teamSize={teamSize} tags={tags} />
      <PhotoSwipeGallery
        className="gallery"
        isOpen={isGalleryOpen}
        items={images}
        onClose={onGalleryClose}
      />
    </div>
  </Zoom>
)

export default ProjectView
