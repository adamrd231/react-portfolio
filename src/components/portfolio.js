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
                                src={`https://website-portfolio-rdconcepts.herokuapp.com/${entry.image_url}`} 
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