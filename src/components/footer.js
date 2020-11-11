import React from 'react';

function Footer() {
    return (
        <div id="footer" className="footer">

            <div className="footer-icon-container">
                <h2>Links</h2>
                <div>
                    <a href="https://www.instagram.com/adamrd231/">
                        <img className="footer-icons" src="http://127.0.0.1:8000/photos/instagram.png" alt="Instagram"/>    
                    </a>
                    <a href="https://www.linkedin.com/in/rdconcepts/">
                        <img className="footer-icons" src="http://127.0.0.1:8000/photos/insta_ivxHIhQ.png" alt="Instagram"/>
                    </a>
                    <a href="https://github.com/adamrd231">
                        <img className="footer-icons" src="http://127.0.0.1:8000/photos/github_CoWa151.png" alt="Instagram"/>
                    </a>
                </div>
                
            </div>
            <div>
                <h2>About</h2>
                <p><strong>Email:</strong> adam@rdconcepts.design</p>
                <p>Portland, Oregon</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
            </div>
            <div>
                <h2>Contact</h2>
                <p><strong>Email:</strong> adam@rdconcepts.design</p>
            </div>
            <div className="footer-technology">
                <h2>Technology</h2>
                <p>Designed with Adobe UX</p>
                <p>API Database in Django</p>
                <p>Frontend Development with React.js</p>
            </div>
            
        </div>
    )
}

export default Footer;