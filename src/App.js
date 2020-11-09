import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menu';
import LandingPage from './components/landing_page';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Blogs from './components/blogs';
import SingleProjectTemplate from './components/single-project-template';
import SingleBlogTemplate from './components/single-blog-template.js';

// import { useFetch } from './hooks/useFetch';

function App() {

  // create state for portfolio entries
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Create state for blogs
  const [blogs, setBlogs] = useState([]);
  // const [data] = useFetch();

  const loadEntry = entry => {
    setSelectedEntry(entry);
    console.log(entry);
  }

  const loadBlog = blog => {
    setSelectedBlog(blog);
    console.log(blog);
  }


  useEffect( () => {
   fetch("http://127.0.0.1:8000/projects/projects/", {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
     }
   })
   .then(response => response.json())
   .then(response => setEntries(response))

  }, [])

  useEffect( () => {
    fetch("http://127.0.0.1:8000/projects/blog/", {
    method: 'GET',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
    }
  })
  .then(response => response.json())
  .then(response => setBlogs(response))
 
   }, [])


  if (selectedEntry) { return <SingleProjectTemplate entry={selectedEntry}/> }

  if (selectedBlog) { return <SingleBlogTemplate blog={selectedBlog} /> }

  else return (
      <div className="App">
        <header>
          <Menu />
          <LandingPage />
        </header>
        <div>
            
            <Portfolio entries={entries} entryClicked={loadEntry}/>
            <Blogs blogs={blogs} blogClicked={loadBlog} blogs={blogs}/>
            <Footer />
        </div>
          
      </div>
    );
  }

export default App;
