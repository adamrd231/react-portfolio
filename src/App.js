import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menu';
import LandingPage from './components/landing_page';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Blogs from './components/blogs';
import { API } from './api-service';

function App() {

  // create state for portfolio entries
  const [entries, setEntries] = useState([]);

  // Create state for blogs
  const [blogs, setBlogs] = useState([]);

  useEffect( () => {
    API.getProjects().then( projects => setEntries(projects))
    API.getBlogs().then( blogs => setBlogs(blogs))
  }, [])

 return (
      <div className="App">
        <header>
          <Menu />
          <LandingPage />
        </header>
        <div>
          <Portfolio entries={entries}/>
          <Blogs blogs={blogs} />
          <Footer />
        </div>
          
      </div>
    );
  }

export default App;
