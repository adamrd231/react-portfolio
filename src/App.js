import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menu';
import LandingPage from './components/landing_page';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
// import { useFetch } from './hooks/useFetch';

function App() {

  const [entries, setEntries] = useState([]);
  // const [data] = useFetch();


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


  return (
    <div className="App">
      <header>
        <Menu />
        <LandingPage />
      </header>
      <div>
          <Portfolio entries={entries}/>
          <Footer />
      </div>
        
    </div>
  );
}

export default App;
