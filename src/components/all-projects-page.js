import React, { useEffect } from 'react';
import SecondaryMenu from './secondary-menu';
import Footer from './footer';

function AllProjectsPage() {

    const ent = props.location.state;
    console.log(ent)

    // create state for portfolio entries
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        API.getProjects().then( projects => setEntries(projects))
    }, []);


    return  (
        <div className="App">
            
            <div className="all-projects-container">
            <SecondaryMenu />

            {/* This is the image layout, pulls from the landing page */}
            <div className="all-projects-image-container">
                { entries.map( project => {
                    return (
                        <img 
                            className="single-page-image" 
                            src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/${project.image_url}`} 
                            alt="Project Images">
                        </img>  
                    ) 
                })} 
            </div>


            
        </div>
        <Footer />
        
    </div>
    )

    }

export default AllProjectsPage;