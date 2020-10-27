import React from 'react';



function Portfolio(props) {

    const entryClicked = entry => evt => {
        props.entryClicked(entry);
    }

    const fetchImageUrl = entry => {
        return fetch(`http://127.0.0.1:8000/projects/photos/${entry.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad'
            }
        }).then(response => response.json())
        .then(response => console.log(response))
    }

    return (
        <div className="portfolio">
            <h2>Projects</h2>  
            <hr></hr>    

                { props.entries && props.entries.map( entry => {

                    
                    
                    return (
                        <div className="portfolio-entry clickable" key={entry.id}>
                            <img src={`http://127.0.0.1:8000/${entry.image_url}`} alt="Project Images" />
                            <div className="text-container" onClick={entryClicked(entry)}>
                                <h3>{entry.title}</h3>
                                <p>{entry.category}</p>
                                <p>{entry.technology}</p>
                                <p>{entry.description}</p>
                            </div>
                        </div>

                    )
                })}

        </div>
    )
}

export default Portfolio;