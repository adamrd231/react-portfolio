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

                <div className="landing-text-container">
                    <h1 className="landing-title">Body of Work.</h1>
                    <div className="category-container">
                         <h3 className="category-item">Categories:</h3>
                        { categories.map( categ => {
                            return (
                                <p className="category-item clickable">{categ.name}</p> 
                            )
                        })}
                    </div>
                    <div className="portfolio-text-limit">
                        <h2 className="landing-quote">Projects I have developed and available on the App Store.</h2>
                        <h2 className="landing-text">Using native swift development in XCode, I have developed over seven iPhone/IPad and MacOS Apps. From architecture, to design, development and deployment, I can handle the entire lifecycle of an iPhone app.</h2>
                    </div>
                    <div className="portfolio-box" >
                    
                        { entries && entries.slice(0, 6).map( entry => {    
                            return (
                                <div className="portfolio-entry clickable" id={entry.slug} key={entry.id} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
                                    <Link className="image-link"
                                            to={{
                                                pathname: "/portfolio/" + entry.slug,
                                                state: entry = entry
                                                }}>
                                            <div className="portfolio-link-container">
                                                <img 
                                                    src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${entry.image_url}`} 
                                                    alt="Project Images"  >
                                                </img>
                                                <div className="portfolio-text-container">
                                                    <p className="portfolio-title">{entry.title}</p>
                                                    <p className="portfolio-tagline">{entry.tagline}</p>  
                                                    <p className="portfolio-category">{entry.category_name}</p>
                                                </div>
                                                
                                            </div>
                                            
                                    </Link>  
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        )
    } else {
        return (
            <div id="blogs" className="home-page-blogs">
                <p className="loading-graphic">Loading Portfolio...</p>
            </div>
 
        )
    }
    
}

export default Portfolio;