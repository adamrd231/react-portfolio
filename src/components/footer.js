import React from 'react';
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
                    <div className="footer-company-links">
                        <div className="flex-row">
                            <p className="footerlinks-title">About Adam Reed</p>
                            <p></p>
                        </div>
    
                        <div className="flex-row">   
                            <div className="half-width">
                                <p className="small-font">Thank you for visiting my portfolio website.</p>
                                <p className="small-font">I built this website using React.js to develop the frontend portfolio and is deployed with firebase for easy hosting and ability to update with a GitHub Repository. </p>
                                <p className="small-font">Using the Python language, I developed the backend RestAPI with the Django framework. The API is hosted by Heroku.</p>
                            </div>
                            <div className="flex-row">
                                {/* First Icon */}
                                <a href="https://www.instagram.com/adamrd231/" target="_blank" rel="noopener noreferrer">
                                    <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/insta-white.png" alt="Instagram"/>
                                </a>
                                {/* Second Icon */}
                                <a href="https://www.linkedin.com/in/rdconcepts/" target="_blank" rel="noopener noreferrer">
                                    <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/linkedin-white.png" alt="Instagram"/>
                                </a>
                                {/* Third Icon */}
                                <a href="https://github.com/adamrd231" target="_blank" rel="noopener noreferrer">
                                    <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/github-white.png" alt="Instagram"/>
                                </a>
                            </div>
                            
                        </div>

                    </div>
                   
                </div>
                
            </div>

            <div className="footer-icon-container">
                
                <a href="mailto:adam@rdconcepts.design"><p className="copyright-link">Adam Reed // rdConcepts Design</p></a>
                <p className="copyright-link">iOS Designer & Developer. Digital & Brand Development.</p>
                <p className="copyright-link">Locatd in Boise, Idaho.</p>

            </div>
  
            
        </div>
    )
}

export default Footer;