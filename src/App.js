import React from 'react';
import './CSS/App.css';
import './CSS/menu.css';

import Menu from './components/menus/menu';
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
