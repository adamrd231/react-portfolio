import React from 'react';

function LandingPage() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="landing-container">
                    <h1 className="landing-title">Adam Reed.</h1>
                    <p className="landing-description">I am a Designer & Developer. Scroll down to browse my portfolio, blog and how to contact me.</p>
                </div>  
                <div className="landing-page-image">
                    <img 
                        src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/billboard.JPG`} 
                        alt="Project Images"  >
                    </img>
                </div>
                        
            </div> 
            <div className="landing-quote">
                <p>"Creative designer with a specialty in graphics, illustration and front-end design. Experience with marketing, brand-management, product-management, design and developing websites and mobile apps." </p>
            </div>
        </React.Fragment>
        
    )
}

export default LandingPage;