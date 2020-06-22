import React, { Component } from 'react';
import ProjectFullDetails from './ProjectFullDetails';

class PortfolioItems extends Component {
  state = {
    show: false,
  };

  onShowDetails = (event) => {
    if (this.state.show === true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    const { alt, url, headerText, pText } = this.props;

    return (
      <div>
        <div className='portfolio-item'>
          <img alt={alt} src={url} />
          <div className='portfolio-detail'>
            <div className='portfolio-detail-header'>
              <h4>{headerText}</h4>
              <button onClick={this.onShowDetails}>Details</button>
            </div>
            <p>{pText}</p>
          </div>
        </div>
        {this.state.show ? (
          <ProjectFullDetails
            alt={alt}
            url={url}
            headerText={headerText}
            pText={pText}
            onShowDetails={this.onShowDetails}
          />
        ) : null}
      </div>
    );
  }
}

export default PortfolioItems;
