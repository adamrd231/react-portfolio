import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-row-1">
                    <div className="menu-link-container">
                        <HashLink to="#home" className="clickable"><h2 className="footer-link">HOME</h2></HashLink>
                        <HashLink to="#portfolio" className="clickable"><h2 className="footer-link">PORTFOLIO</h2></HashLink>
                        <HashLink to="#blogs" className="clickable"><h2 className="footer-link">BLOGS</h2></HashLink>
                        <HashLink to="#footer" className="clickable"><h2 className="footer-link">CONTACT</h2></HashLink>
                    </div>

                    <div className="app-link-container">
                        <div className="store-container-1">
                            <h3>App Store</h3>
                            <a href="https://apps.apple.com/us/app/engage-timer/id1470569685"><p className="footer-link">Engage Timer</p></a>
                            <a href="https://apps.apple.com/us/developer/rd-concepts/id1293498470"><p className="footer-link">Dual Up Down Timer</p></a>
                            <a href="https://apps.apple.com/us/app/ediblethccalculator/id1303242056"><p className="footer-link">Edible THC Calculator</p></a>
                            <a href="https://itunes.apple.com/us/app/wooproducts/id1039566132?mt=8"><p className="footer-link">Wproducts for WooCommerce</p></a>
                            <a href="https://apps.apple.com/us/developer/rd-concepts/id1293498470"><p className="footer-link">Adam's Calc</p></a>
                        </div>
                        <div className="store-container-2">
                            <h3>Google Play</h3>
                            <a><p className="footer-link">Edible Calculator - Coming Soon!</p></a>
                            <a href="https://play.google.com/store/apps/details?id=co.wooproducts"><p className="footer-link">Wproducts for WooCommerce</p></a>
                        </div>
                    </div>
                </div>
                        
                <div div className="footer-row-2">
                    <div className="footer-company-title">
                        
                    </div>
                    <div className="footer-company-links">
                        <div className="flex-row underline">
                            <h3>Newest Updates</h3>
                            <p>-></p>
                        </div>

                        <div>
                            
                            <div className="flex-row">   
                                <div className="half-width">
                                    <p className="small-font">Thank you for visiting my website, I bet you thought there was some technical Terms of Service of Privacy Policy information here huh?</p>
                                </div>
                                <div className="flex-row">
                                   <a href="https://www.instagram.com/adamrd231/"><img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/insta-white.png" alt="Instagram"/>    </a>
                                  <a href="https://www.linkedin.com/in/rdconcepts/"><img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/linkedin-white.png" alt="Instagram"/></a>
                                  <a href="https://github.com/adamrd231"><img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/github-white.png" alt="Instagram"/></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    

                
            </div>

            <div className="footer-icon-container">
                <a href="mailto:someone@example.com"><p className="copyright-link">rdConcepts design.</p></a>
                <div className="flex-row">
                    <p className="copyright-link">UI / UX Design. Web & Mobile Dev.</p>
                    <p className="copyright-link">Portland, Oregon.</p>
                </div>
            </div>
  
            
        </div>
    )
}

export default Footer;