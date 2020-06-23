import React from 'react';

const About = () => {
  return (
    <section id='about' className='about-section'>
      <div>
        <img
          className='profile-image'
          alt='profile'
          src='./images/profile.png'
        />
      </div>
      <div className='about-content'>
        <h2>About Me</h2>
        <p>
          I have a firm knowledge of HTML, CSS and JavaScript language and
          possess a good knowledge of computer software packages (frameworks and
          tools) that are used in today’s technology.
        </p>
        <p>
          On a personal level, I am highly-motivated, result oriented,
          self-driven, hard-working, fast learner and constantly seeking to
          improve my skills and am fully aware of the latest Front-end
          Development Tools.
        </p>
        <p>
          In addition to this, I have the ability to adapt to any type of team
          environment, I am team oriented and get along with others when working
          in a group setting. I also have the ability to work independently
          while staying on schedule and meeting those tight deadlines.
        </p>
        <p>Below is a list of my current technical skills:</p>
        <div className='skills-logo'>
          <img src='./html.png' alt='html' />
          <img src='./css.png' alt='css' />
          <img src='./javascript.png' alt='javascript' />
          <img src='./react.png' alt='react js' />
          <img src='./boostrap.png' alt='boostrap 4' />
          <img src='./sass.png' alt='sass' />
          <img src='./git.png' alt='git' />
          <img src='./webpack.png' alt='webpack' />
          <img src='./sql.png' alt='sql' />
          <img src='./devtools.png' alt='devtools' />
        </div>
      </div>
    </section>
  );
};

export default About;
