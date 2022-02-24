import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-row-1">
                    <div className="menu-link-container">
                        <Link to="/" className="footer-icon">Home</Link>
                        <Link to="/" className="footer-icon">Portfolio</Link>
                        <Link to="/" className="footer-icon">Blogs</Link>
                        <Link to="/" className="footer-icon">Contact</Link>
                    </div>
                    <div className="footer-company-links">
                        <div className="flex-row">
                            <p className="footerlinks-title">About Adam Reed</p>
                            <p></p>
                        </div>
    
                        <div className="flex-row align-top">   
                            <div className="half-width flex-column">
                                <p className="small-font">Thank you for visiting my portfolio website.</p>
                                <p className="small-font">I built this website using React.js to develop the frontend portfolio and is deployed with firebase for easy hosting and ability to update with a GitHub Repository. </p>
                                <p className="small-font">Using the Python language, I developed the backend RestAPI with the Django framework. The API is hosted by Heroku.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-icon-container">
                <div>
                    <p className="footerlinks-title">Information</p>
                    <a href="mailto:adam@rdconcepts.design"><p className="copyright-link">Adam Reed // rdConcepts Design</p></a>
                    <p className="copyright-link">iOS Designer & Developer. Digital & Brand Development.</p>
                    <p className="copyright-link">Locatd in Boise, Idaho.</p>
                </div>
                <div className="footer-icons-black flex-column">
                    <a href="https://www.instagram.com/adamrd231/" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/insta-clean.png" alt="Instagram"/>    
                    </a>
                    <a href="https://www.linkedin.com/in/rdconcepts/" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/linkedin-clean.png" alt="Instagram"/>
                    </a>
                    <a href="https://github.com/adamrd231" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/github-clean.png" alt="Instagram"/>
                    </a>

                    <a href="https://www.buymeacoffee.com/adamreed" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icons" src="https://portfolio-website-adamrd231.s3.us-west-1.amazonaws.com/buymeacoffee.png" alt="Instagram"/>
                    </a> 
                </div>
                

            </div>
  
            
        </div>
    )
}

export default Footer;