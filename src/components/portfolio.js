import React from 'react';

function Portfolio(props) {

    return (
        <div className="portfolio">
            <h2>Projects</h2>  
            <hr></hr>    
                
                { props.entries && props.entries.map( entry => {
                    return (
                        <div key={entry.id}>
                            <img src={`/uploads/${entry.image}`} alt="Project Images" />
                            <h3>{entry.title}</h3>
                            <p>{entry.category}</p>
                            <p>{entry.technology}</p>
                            <p>{entry.description}</p>
                        </div>

                    )
                })}

        </div>
    )
}

export default Portfolio;