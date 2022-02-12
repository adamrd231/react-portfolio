import React, { useState, useEffect } from 'react';
import SecondaryMenu from './menus/secondary-menu';
import Footer from './footer';
import { API } from '../api-service';
import { Link } from 'react-router-dom';

function AllProjectsPage(props) {

    const ent = props.location.state;
    console.log(ent)

    // create state for portfolio entries
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        API.getProjects().then( projects => setEntries(projects))
    }, []);


    return  (
        <div className="App">
            <SecondaryMenu />
            <div className="portfolio-container">
            

            {/* This is the image layout, pulls from the landing page */}
            <div className="portfolio-box">
                { entries.map( project => {
                    // AWS Server where images are stored
                    const source = 'https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/'

                    // Return the image with the correct project url
                    return (
                        <Link className="home-page-portfolio"
                                        to={{
                                            pathname: "/portfolio/" + project.slug,
                                            state: project = project
                                            }}>
                        <img 
                            className="all-projects-images" 
                            src={(`${source + project.image_url}`)} 
                            alt="Project Images">
                        </img>  
                        </Link>
                    ) 
                })} 
            </div>


            
        </div>
        <Footer />
        
    </div>
    )

    }

export default AllProjectsPage;