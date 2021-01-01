import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio(props) {


    return (
        <div id="portfolio" className="portfolio-container"> 

            <div className="portfolio-box">
                { props.entries && props.entries.slice(0, 3).map( entry => {    
                        return (
                            <div className="portfolio-entry clickable" id={entry.slug} key={entry.id}>
                                <Link
                                    className="home-page-portfolio"
                                    to={{
                                    pathname: "/portfolio/" + entry.slug,
                                    state: {
                                        entry: entry
                                    }
                                }}>
                                    <img 
                                        src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${entry.image_url}`} 
                                        alt="Project Images"  >
                                    </img>
                                    <h2 className="portfolio-t">{entry.title}</h2>
                                    <div className="portfolio-desciption">
                                        <p>{entry.description.slice(0, 50)}</p>
                                        <p>"Click to read more..."</p>
                                    </div>
                                    
                                    
                            
                                </Link>
                            
                            </div>
                        )
                })}
            </div>
            
            <div className="porfolio-slug-section">
                <p>For more app development, UX and UI design, Illustrations or to check out my work, see where I have been traveling, what I have been designing. click the link below.</p>
                <Link>
                    <h2>Explore full portfolio.</h2>
                </Link>
            </div>
            
        </div>
        
    )
}

export default Portfolio;