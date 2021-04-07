import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menu';
import LandingPage from './components/landing_page';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Blogs from './components/blogs';

function App() {

  // create state for portfolio entries
  // const [entries, setEntries] = useState([]);

  // Create state for blogs
  const [blogs, setBlogs] = useState([]);


  // useEffect( () => {
  //   API.getProjects().then( projects => setEntries(projects))
  //   API.getBlogs().then( blogs => setBlogs(blogs))
  // }, [])

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
