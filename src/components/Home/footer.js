import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-width">
                <div className="footer-row-1">
                    <div className="menu-link-container">
                        <Link to="/" className="footer-menu">Home</Link>
                        <Link to="/" className="footer-menu">Portfolio</Link>
                        <Link to="/" className="footer-menu">Blogs</Link>
                        <Link to="/" className="footer-menu">Contact</Link>
                    </div>
                </div>
            

                <div className="footer-icon-container">
                    <div className="footer-company-links">
                        <div className="flex-row">
                            <p className="footerlinks-title">About Adam Reed</p>
                            <p></p>
                        </div>

                        <div className="align-top">   
                            
                            <p className="small-font">Thank you for visiting my portfolio website and viewing my work.</p>
                            <p className="small-font">I built this website using React.js to develop the frontend portfolio and is deployed with firebase for easy hosting and ability to update with a GitHub Repository. </p>
                            <p className="small-font">Using the Python language, I developed the backend RestAPI with the Django framework. The API is hosted by Heroku.</p>
                            <p className="small-font">iOS Designer & Developer. Digital & Brand Development.</p>
                            <p className="small-font">Located in Boise, Idaho.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;