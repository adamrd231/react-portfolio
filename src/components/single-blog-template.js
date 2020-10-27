import React from 'react';

function SingleBlogTemplate(props) {

    const ent = props.entry;


    return (
        <div className="single-page-blog-container App">
            <img src={`http://127.0.0.1:8000/${ent.image_url}`} alt="Project Images" />
            <h1>{ent.title}</h1>
            <p>{ent.category_name}</p>
            <p>{ent.technology}</p>
            <p>{ent.description}</p>
        </div>
        
    )
}

export default SingleBlogTemplate;