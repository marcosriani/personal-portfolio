import React from 'react';

const Portfolio = () => {
  return (
    <section className='portfolio-section'>
      <div className='portfolio-header'>
        <h2>Portfolio</h2>
        <h3>Click on the image to see the project description.</h3>
      </div>
      <div className='portfolio-items'>
        <div>
          <img alt='project 1' src='./images/project1.png' />
        </div>
        <div>
          <img alt='project 2' src='./images/project2.png' />
        </div>
        <div>
          <img alt='project 3' src='./images/project3.png' />
        </div>
        <div>
          <img alt='project 4' src='./images/project4.png' />
        </div>
        <div>
          <img alt='project 5' src='./images/project5.png' />
        </div>
        <div>
          <img alt='project 6' src='./images/project6.png' />
        </div>
        <div>
          <img alt='project 7' src='./images/project7.png' />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
