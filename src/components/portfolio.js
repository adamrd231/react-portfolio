import React from 'react';



function Portfolio(props) {

    const entryClicked = entry => evt => {
        props.entryClicked(entry);
    }


    return (
        <div className="portfolio"> 
            { props.entries && props.entries.map( entry => {    
                return (
                    <div className="portfolio-entry clickable" key={entry.id}>
                        <img 
                            className="home-page-portfolio" 
                            src={`http://127.0.0.1:8000/${entry.image_url}`} 
                            alt="Project Images" 
                            onClick={entryClicked(entry)} >
                        </img>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Portfolio;