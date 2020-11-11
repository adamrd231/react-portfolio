import React, { useState, useEffect } from 'react';
import Menu from './menu';
import Footer from './footer';
import { API } from '../api-service';

function SingleProjectTemplate(props) {

    const ent = props.entry;

    const [imageSelected, setImageSelected] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return <div className="single-page-project App">

                <Menu />
                
                <div className="single-page-project-container">

                    {/* This is the information section */}
                    <div className="single-page-project-copy">
                        <h1>{ent.title}</h1>
                        <h2>{ent.tagline}</h2>
                        <p><strong>Tools: </strong>{ent.technology}</p>
                        <span>{ent.description}</span>
                        <a className="clickable" href={ent.website}>
                            <button className="app-store-button clickable">{ent.website_button_text}</button>
                        </a>
                        

                        <div className="quote-box">
                            { ent.quote_string.map( quote => {
                                return (
                                    <div className="quote-container">
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
                            src={`http://127.0.0.1:8000/${ent.image_url}`} 
                            alt="Project Images"
                            >
                        </img>
                    </div>
                </div>
                
                <Footer />
                
            </div>;
    }

export default SingleProjectTemplate;