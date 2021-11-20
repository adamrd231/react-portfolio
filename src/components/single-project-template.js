import React, { useEffect } from 'react';
import SecondaryMenu from './secondary-menu';
import Footer from './footer';

function SingleProjectTemplate(props) {

    const ent = props.location.state;
    console.log(ent)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return  (
       
    <React.Fragment>    
        <SecondaryMenu />
        <div className="single-page-project-container App">
            

            {/* This is the image layout, pulls from the landing page */}
            <div className="single-page-image-container">
                <img 
                    className="single-page-image" 
                    src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${ent.image_url}`} 
                    alt="Project Images"
                    >
                </img>
            </div>

            {/* This is the information section */}
            <div className="single-page-project-copy">
                <p className="single-page-title">{ent.title}</p>
                <p className="single-page-tagline">{ent.tagline}</p>
                <p className="single-page-tools">Tools: {ent.technology}</p>
                
                <span dangerouslySetInnerHTML = {{ __html: ent.description}}></span>

                <a className="clickable" href={ent.website}>
                    <button className="app-store-button clickable">{ent.website_button_text}</button>
                </a>
                
                <div className="quote-box">
                    { ent.quote_string.map( quote => {
                        return (
                            <div key={quote} className="quote-container">
                                <p className="quote-text"><strong>"</strong> {quote[0]} <strong>"</strong> </p>
                                <p className="author-text">- {quote[1]}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        
        </div>
        <Footer />
    </React.Fragment>
    )

    }

export default SingleProjectTemplate;