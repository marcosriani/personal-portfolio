import React from 'react';
import PortfolioItems from './PortfolioItems';

const Portfolio = ({ show, onShowDetails }) => {
  return (
    <section id='portfolio' className='portfolio-section'>
      <div className='portfolio-header'>
        <h2>Portfolio</h2>
        <h3>Click on the image to see the project description.</h3>
      </div>
      <div className='portfolio-items'>
        <PortfolioItems
          alt='project1'
          url='./images/project1.png'
          headerText=' 1 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project2'
          url='./images/project2.png'
          headerText=' 2 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project3'
          url='./images/project3.png'
          headerText=' 3 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project4'
          url='./images/project4.png'
          headerText=' 4 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project5'
          url='./images/project5.png'
          headerText=' 5 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project6'
          url='./images/project6.png'
          headerText=' 6 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project7'
          url='./images/project7.png'
          headerText=' 7 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
        <PortfolioItems
          alt='project'
          url='./images/project.png'
          headerText=' 8 Text goes in here card'
          pText='on the image to see the project on the image to see the project on
              the image to see the project'
        />
      </div>
    </section>
  );
};

export default Portfolio;
