import React from 'react';
import ImageToLoad from './imageToLoad';

function LandingPage() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <h1 className="landing-title">Adam Reed.</h1>
                <div className="landing-page-image">
                    <ImageToLoad 
                        src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/landing-full" 
                        placeholder="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/landing-placeholder"
                        alt="Landing Page Image"></ImageToLoad>
                </div>

                <div className="landing-page-quote-container">
                    <h2 className="landing-quote">"Creative designer with a specialty in graphics, illustration and front-end design. Experience with marketing, brand-management, product-management, design and developing websites and mobile apps." </h2>
                </div>    
            </div> 
            
        </React.Fragment>
        
    )
}

export default LandingPage;