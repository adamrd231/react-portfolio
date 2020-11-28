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
        <div className="single-page-project App">
            <SecondaryMenu />
            <div className="single-page-project-container">

            {/* This is the information section */}
            <div className="single-page-project-copy">
                <h1>{ent.entry.title}</h1>
                <h2>{ent.entry.tagline}</h2>
                <p><strong>Tools: </strong>{ent.entry.technology}</p>
                
                <span dangerouslySetInnerHTML = {{ __html: ent.entry.description}}></span>

                <a className="clickable" href={ent.entry.website}>
                    <button className="app-store-button clickable">{ent.entry.website_button_text}</button>
                </a>
                
                <div className="quote-box">
                    { ent.entry.quote_string.map( quote => {
                        return (
                            <div key={quote} className="quote-container">
                                <p className="quote-text"><strong>"</strong> {quote[0]} <strong>"</strong> </p>
                                <p className="author-text">- {quote[1]}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* This is the image layout, pulls from the landing page */}
            <div>
                <img 
                    className="single-page-image" 
                    src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${ent.entry.image_url}`} 
                    alt="Project Images"
                    >
                </img>
            </div>
        </div>
        <Footer />
        
    </div>
    )

    }

export default SingleProjectTemplate;