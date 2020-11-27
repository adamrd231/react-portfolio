import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio(props) {

    return (
        <div id="portfolio" className="portfolio"> 
            { props.entries && props.entries.map( entry => {    
                return (
                    <div className="portfolio-entry clickable" key={entry.id}>
                        <Link
                            className="home-page-portfolio"
                            to={{
                            pathname: "/portfolio/" + entry.slug,
                            state: {
                                entry: entry
                            }
                        }}>
                            <img 
                                src={`http://127.0.0.1:8000/${entry.image_url}`} 
                                alt="Project Images"  >
                            </img>
                        </Link>
                      
                    </div>
                )
            })}
        </div>
        
    )
}

export default Portfolio;