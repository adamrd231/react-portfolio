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
                        <div className="landing-title">iOS Dev, from scratch.</div>
                        <p>Hello, my name is Adam Reed and I am a freelance iOS developer. I specialize on helping businesses realize their dream of building an iOS app for the App Store. Because I am a solo design / development studio, I am able to bring all of my value to your app, instead of overhead, middleman charges for developers, etc. I can work with existing databases for things like showing restaurant products on a menu, or clothing items from your inventory. If you have ever thought, "I would love to be in the App Store" lets talk!</p>
                    </div>

                    <div className="pricing-section-container">
                    <div className="landing-title">Pricing</div>
                        <div className="table-container">
                            <div className="table-column">
                                <p className="table-title">Type of App</p>
                                <p>Small App Development</p>
                                <hr></hr>
                                <p>Medium App Development</p>
                                <hr></hr>
                                <p>Enterprise App Development</p>
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
                                <p>$4,000-$6,000</p>
                                <hr></hr>
                                <p>$9,000-$16,000</p>
                                <hr></hr>
                                <p>$16,000 +</p>
                            </div>

                        </div>
                        <div className="table-footnote">Pricing here is an estimate, project pricing will vary based on number of features, design work, timeline, and project scope will be create prior to any development.</div>
                            


                        
                    </div> 
                    <div className="pricing-section-container">
                            <div className="landing-title">Let's Talk Apps.</div>
                                <a className="pricing-email" href="mailto: adam@rdconcepts.design" target="_blank">Send me an Email</a>
                        </div>
                </div>
            <Footer></Footer>
        </React.Fragment>
       
        
    )
}

export default PricingPage;