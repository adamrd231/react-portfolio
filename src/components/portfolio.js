import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Portfolio(props) {

    const [ hovering, SetHovering ] = useState(true);
    const [ portfolioLoading, SetPortfolioLoading ] = useState(false);
    const [ customClassName, SetCustomClassName ] = useState("hidden");
    const hiddenComponent = "hidden"
    const showComponent = "visible"

    const handleMouseHover = () => {
        SetHovering(!hovering)
        console.log(hovering)
    }

    useEffect(() => {
        if (hovering == false) {
            SetCustomClassName('visible')
        } else {
            SetCustomClassName('hidden')
        }
    },[hovering, SetHovering])

    useEffect(() => {
        if (props.entries) {
            SetPortfolioLoading(true)
        } else {
            SetPortfolioLoading(false)
        }
    },[props.entries, SetPortfolioLoading, portfolioLoading])

    if (portfolioLoading) {
        return (
            <div id="portfolio" className="portfolio-container"> 
    
                <div className="portfolio-box" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
                    
                    { props.entries && props.entries.slice(0, 3).map( entry => {    
                        return (
                            <div className="portfolio-entry clickable" id={entry.slug} key={entry.id}>
                                <Link
                                    className="home-page-portfolio"
                                    to={{
                                        pathname: "/portfolio/" + entry.slug,
                                        state: { entry: entry }}}>
    
                                    <img 
                                        src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${entry.image_url}`} 
                                        alt="Project Images"  >
                                    </img>
    
                                    <h2 className="portfolio-t">{entry.title}</h2>
                                    <div className={customClassName}>
                                        <span dangerouslySetInnerHTML = {{ __html: entry.description.slice(0, 150) + "..."}}></span>
                                        <p>Click to read more.</p>
                                    </div>
                                </Link>      
                            </div>
                        )
                    })}
                </div>
                
                <div className={"porfolio-slug-section"}>
                    <p>For more app development, UX and UI design, Illustrations or to check out my work, see where I have been traveling, what I have been designing. click the link below.</p>
                    <Link>
                        <h2>Explore full portfolio.</h2>
                    </Link>
                </div>
                
            </div>
            
        )
    } else {
        return (
            <div id="portfolio" className="portfolio-container"> 
                <p className="loading-graphic">Loading Portfolio...</p>
            </div>
        )
    }
    
}

export default Portfolio;