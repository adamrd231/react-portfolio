import React from 'react';

function Footer() {
    return (
        <div id="footer" className="footer">

            <div className="footer-icon-container">
                <h2>Links</h2>
                <div className="links-container">
                    <a href="https://www.instagram.com/adamrd231/">
                        <img className="footer-icons" src="http://127.0.0.1:8000/photos/insta-clean_SWrOn0R.png" alt="Instagram"/>    
                    </a>
                    <a href="https://www.linkedin.com/in/rdconcepts/">
                        <img className="footer-icons" src="http://127.0.0.1:8000/photos/linkedin-clean_JuIR7Ji.png" alt="Instagram"/>
                    </a>
                    <a href="https://github.com/adamrd231">
                        <img className="footer-icons" src="http://127.0.0.1:8000/photos/github-clean_gvqukXQ.png" alt="Instagram"/>
                    </a>
                </div>   
            </div>
  

            <div>
                <h2>About Me</h2>
                <p>I live in Portland, Oregon.</p>
                <p>Born and raised in Northern Michigan. </p>
                <p>BFA in Human Centered Designfrom NMU.</p>
            </div>

            
            <div className="footer-technology">
                <h2>Technology</h2>
                <p><strong>Design</strong> | Adobe Illustrator, UX, Photoshop, AfterEffects </p>
                <p><strong>Dev</strong> | Python, Javascript, Swift, HTML/CSS, SQL</p>
                <p><strong>This Website</strong> | Backend - Django, Frontend - React.js</p>
            </div>


            <div>
                <h2>Contact</h2>
                <p></p>
                <p>adam@rdconcepts.design</p>
            </div>
            
        </div>
    )
}

export default Footer;