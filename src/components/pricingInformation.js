import React from 'react';
import Menu from './menus/menu';
import Footer from './footer';
import SecondaryMenu from './menus/secondary-menu';

function PricingPage() {

    return (
        <React.Fragment>
            <SecondaryMenu></SecondaryMenu>
                <div className="pricing-page-container App">
                    <div className="pricing-section-container">
                        <div className="landing-title">Big projects, small team.</div>
                        <p>Have you ever dreamed about building an website or iOS app for your small business? My name is Adam Reed and I am a freelance web & iOS developer. I work with small businesses building their dream of launching a website or iOS app for the App Store.</p> 
                        <p>Because I am a solo design / development studio, I am able to offer my services for a fraction of design studios. With a background in design and development, I can take your idea from paper napkin to your browser.</p>
                        <p></p>
                       
                    </div>

                    <div className="pricing-section-container">
                    <div className="landing-title">Pricing</div>
                        <div className="table-container">
                            <div className="table-column">
                                <p className="table-title">Type of App</p>
                                <p>Small Project</p>
                                <hr></hr>
                                <p>Medium Project</p>
                                <hr></hr>
                                <p>Enterprise Project</p>
                            </div>

                            <div className="table-column">
                                <p className="table-title">Average iOS Dev Time</p>  
                                <p>1-2 Month</p>
                                <hr></hr>
                                <p>3-5 Months</p>
                                <hr></hr>
                                <p>6 Months +</p>
                            </div>

                            <div className="table-column">
                                <p className="table-title">Average iOS Deployment Cost</p>  
                                <p>$2,000-$5,000</p>
                                <hr></hr>
                                <p>$6,000-$12,000</p>
                                <hr></hr>
                                <p>$12,000 +</p>
                            </div>

                        </div>
                        <div className="table-footnote">Pricing here is an estimate, project pricing will vary based on number of features, design work, timeline, and project scope will be create prior to any development.</div>
                            


                        
                    </div> 
                    <div className="pricing-section-container">
                            <div className="landing-title">Let's Talk.</div>
                                <a className="pricing-email" href="mailto: adam@rdconcepts.design" target="_blank">Send me an Email</a>
                        </div>
                </div>
            <Footer></Footer>
        </React.Fragment>
       
        
    )
}

export default PricingPage;