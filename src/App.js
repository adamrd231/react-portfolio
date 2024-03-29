import React from 'react';
import './CSS/App.css';
import './CSS/menu.css';
import './CSS/portfolio.css';
import './CSS/Responsive.css';

import Menu from './components/menus/menu';
import LandingPage from './components/Home/landing_page';
import Portfolio from './components/Home/portfolio';
import Footer from './components/Home/footer';
import Blogs from './components/Home/blogs';

function App() {

 return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <div className="body-container">
          <LandingPage />
          <Portfolio/>
          <Blogs />
          <Footer />
        </div>
          
      </div>
    );
  }

export default App;
