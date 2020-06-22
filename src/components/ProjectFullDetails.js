import React, { Component } from 'react';

class ProjectFullDetails extends Component {
  render() {
    const { headerText, pText, onShowDetails, alt, url } = this.props;

    return (
      <div onClick={onShowDetails} className='project-detail-wrapper'>
        <div
          onClick={(e) => e.stopPropagation()}
          className='project-full-detail'
        >
          <div>
            <img alt={alt} src={url} />
          </div>
          <div className='full-description'>
            <div>
              <h2>{headerText}</h2>
              <p className='technology'>What technology</p>
            </div>
            <div className='final-description'>
              <p>{pText}</p>
              <p>{pText}</p>
              <p>{pText}</p>
              <button>View Site</button>
            </div>
          </div>
          <div className='close-button-container'>
            <button className='close-button' onClick={onShowDetails}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectFullDetails;
