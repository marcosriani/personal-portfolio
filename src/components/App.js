import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
