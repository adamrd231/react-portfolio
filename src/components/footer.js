import React from 'react';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-background">

                

                <div className="footer-text-container">
                    <div className="footer-title-container">
                        <p className="footer-title">rdConcepts</p>
                        <p className="footer-text">Copyright RD Concepts, LLC All Rights Reserved.</p>
                    </div>
                    <div className="footer-text-container-two">
                        <a href="mailto:someone@example.com">
                            <p className="footer-text footer-link">contact@rdConcepts.design</p>
                        </a>
                        
                        <p className="footer-text">231.445.1463</p>

                        <a href="https://apps.apple.com/us/developer/rd-concepts/id1293498470">
                            <p className="footer-text footer-link">App Store</p>
                        </a>

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