import React, { useState, useEffect } from 'react';
import Menu from './menu';
import Footer from './footer';

function SingleProjectTemplate(props) {

  const ent = props.entry;

  const [quotes, setQuotes] = useState([]);

  useEffect( () => {
    fetch("http://127.0.0.1:8000/projects/quotes/", {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
        }
      })
      .then(response => response.json())
      .then(resposne => setQuotes(resposne))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="single-page-project App">

            <Menu />
            
            <div className="single-page-project-container">

                {/* This is the information section */}
                <div className="single-page-project-copy">
                    <h1>Workout with a trainer, with or without people.</h1>
                    <p>{ent.description}</p>
                    <a className="clickable" href={ent.website}>
                     <button className="app-store-button">Download free on the App Store.</button>
                    </a>
                    

                    <div className="quote-box">
                        { quotes && quotes.map( quote => {
                            return (
                                <div className="quote-container">
                                    <p className="quote-text">{quote.quote}</p>
                                    <p className="quote-author">{quote.quote_author}</p>
                                    
                                </div>
                            )
                        })}
                    </div>
                    

                </div>

                {/* This is the image layout, pulls from the landing page */}
                <div>
                    <img 
                        className="single-page-image" 
                        src={`http://127.0.0.1:8000/${ent.image_url}`} 
                        alt="Project Images">
                    </img>
                </div>
            </div>
            
            <Footer />
            
        </div>;
}

export default SingleProjectTemplate;