import React from 'react';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-background">

                

                <div className="footer-text-container">
                    <div className="footer-title-container">
                        <h1 className="footer-title">rdConcepts</h1>
                        <p className="footer-text">rdConcepts is a Design & Development studio, working remotely, I can be hired to work with a team or take projects from start to finish. Copyright RD Concepts, LLC All Rights Reserved.</p>
                        
                    </div>
                    <div className="footer-text-container-two">
                        <a href="mailto:someone@example.com">
                            <p className="footer-text footer-link">contact@rdConcepts.design</p>
                        </a>

                        <p>|</p>

                        <a href="https://apps.apple.com/us/developer/rd-concepts/id1293498470">
                            <p className="footer-text footer-link">App Store</p>
                        </a>

                        <p>|</p>

                        <a href="https://play.google.com/store/apps/developer?id=adamrd231">
                            <p className="footer-text footer-link">Google Play Store</p>
                        </a>
                    </div>
                    
                </div>

            </div>

            <div className="footer-icon-container">

                    <a href="https://www.instagram.com/adamrd231/">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/insta-clean.png" alt="Instagram"/>    
                    </a>
                    <a href="https://www.linkedin.com/in/rdconcepts/">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/linkedin-clean.png" alt="Instagram"/>
                    </a>
                    <a href="https://github.com/adamrd231">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/github-clean.png" alt="Instagram"/>
                    </a>

            </div>
  
            
        </div>
    )
}

export default Footer;