import React, { useState } from 'react'
import './styles.scss'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { PhotoSwipeGallery } from 'react-photoswipe'

const Project = ({
  id,
  title,
  logo,
  source,
  time,
  teamSize,
  tags,
  description,
  images
}) => {
  const [isOpen, setIsOpen] = useState(false)

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
        <span className="far fa-calendar" />
        &nbsp;{time}
      </span>
      {teamSize && (
        <span className="tag team-size">
          <span className="far fa-user" />
          &nbsp;Team of {teamSize}
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
        <a
          href={source}
          title="View on GitHub"
          className="button"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="fab fa-github" />
          &nbsp;View on GitHub
        </a>
      )}
    </div>
  )

  return (
    <Zoom>
      <div className={`project ${id}`}>
        <div className="title">{title}</div>
        <Logo id={id} logo={logo} />
        <Fade>
          <div className="description">{description}</div>
        </Fade>
        <SourceLink source={source} />
        <Tags time={time} teamSize={teamSize} tags={tags} />
        <PhotoSwipeGallery
          className="gallery"
          isOpen={isOpen}
          items={images}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </Zoom>
  )
}

export default Project
