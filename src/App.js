import React from 'react';
import './App.css';
import './Responsive.css';

import Menu from './components/menu';
import LandingPage from './components/landing_page';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Blogs from './components/blogs';

function App() {

 return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <React.Fragment>
          <LandingPage />
          <Portfolio/>
          <Blogs />
          <Footer />
        </React.Fragment>
          
      </div>
    );
  }

export default App;
