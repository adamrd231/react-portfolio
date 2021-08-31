import React from 'react';
import ImageToLoad from './imageToLoad';

function LandingPage() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="landing-group-text">
                <h1 className="landing-title">Adam Reed.</h1>
                <h2 className="landing-quote">"Digital designer and developer, fluent in brand design, website design and custom iOS development."</h2>
                </div>
                
                {/* <img 
                    className="landing-image"
                    src={`https://portfolio-website-adamrd231.s3.us-west-1.amazonaws.com/landing.png`} 
                    alt="Landing-Page-Image"  >
                </img> */}
            </div> 
            
        </React.Fragment>
        
    )
}

export default LandingPage;