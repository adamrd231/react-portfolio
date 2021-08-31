import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../api-service';

function Portfolio() {

    const [ hovering, SetHovering ] = useState(true);
    const [ portfolioLoading, SetPortfolioLoading ] = useState(false);
    const [ customClassName, SetCustomClassName ] = useState("hidden");
    const hiddenComponent = "hidden"
    const showComponent = "visible"
    
    // create state for portfolio entries
    const [entries, setEntries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [entriesLoaded, SetEntriesLoaded] = useState(false);

    useEffect(() => {
        API.getProjects()
            .then( projects => setEntries(projects))

            API.getCategories()
            .then(cats => setCategories(cats))
    }, []);

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        if (entries.length > 0) {
            SetEntriesLoaded(true) 
        } else {
            SetEntriesLoaded(false) 
        }
    })

    // Function to let components know if the mouse if hovering over them
    const handleMouseHover = () => {
        SetHovering(!hovering)
    }

    // Function to let components know if image is still loading
    const handleImageLoading = () => {
        
    }

    // Function to change classes for test by portfolio
    useEffect(() => {
        if (!hovering) {
            SetCustomClassName('visible')
        } else {
            SetCustomClassName('hidden')
        }
    },[hovering, SetHovering])

    // API call to get 3 projects for homepage, 
    // Loading spinner to let user know that page is loading.
    // useEffect(() => {
    //     API.getProjects()
    //         .then( projects => setEntries(projects))
    //         .then( projects => console.log(projects))
    // },[props.entries, portfolioLoading])




    // Main Component 
    if (entriesLoaded === true) {
        return (
            <div id="portfolio" className="portfolio-container"> 
                <h1 className="portfolio-title">Body of Work</h1>
                <div className="portfolio-box" >
                    
                    { entries && entries.slice(0, 6).map( entry => {    
                        return (
                            <div className="portfolio-entry clickable" id={entry.slug} key={entry.id} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
                                <Link className="home-page-portfolio"
                                        to={{
                                            pathname: "/portfolio/" + entry.slug,
                                            state: entry = entry
                                            }}>
        
                                        <img 
                                            src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${entry.image_url}`} 
                                            alt="Project Images"  >
                                        </img>
                                </Link>      
                            </div>
                        )
                    })}
                </div>
                
                <div className="porfolio-slug-section">
                     <div className="category-container">
                         <h3 className="category-item">Categories:</h3>
                        { categories.map( categ => {
                            return (
                                <p className="category-item clickable">{categ.name}</p> 
                            )
                            
                        })}
                    </div>
                    
                    <p>For more app development, UX and UI design, Illustrations or to check out my work, see where I have been traveling, what I have been designing. click the link below.</p>
                    <Link to={{
                        pathname: "/fullPortfolio",
                        }}><h2>Explore full portfolio.</h2>
                    </Link>
                        
                    
                </div>
                <div className="gray-color"></div>
                
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