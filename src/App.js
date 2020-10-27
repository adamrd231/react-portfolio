import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menu';
import LandingPage from './components/landing_page';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import SingleBlogTemplate from './components/single-blog-template';

// import { useFetch } from './hooks/useFetch';

function App() {

  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  // const [data] = useFetch();

  const loadEntry = entry => {
    setSelectedEntry(entry);
    console.log(selectedEntry)
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


if (selectedEntry) return <SingleBlogTemplate entry={selectedEntry}/>

  return (
    <div className="App">
      <header>
        <Menu />
        <LandingPage />
      </header>
      <div>
          <Portfolio entries={entries} entryClicked={loadEntry}/>
          <Footer />
      </div>
        
    </div>
  );
}

export default App;
