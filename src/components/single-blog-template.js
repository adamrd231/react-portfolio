import React, { useState, useEffect } from 'react';
import Menu from './menu';
import Footer from './footer';


function SingleBlogTemplate(props) {

    const blog = props.blog;
    const blogs = props.blogs;

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(blogs)
    }, []);

    return (
        <div className="App">
            <Menu /> 
            <div className="single-page-blog">
                
                <div className="single-page-blog-container">
                    <h1>{blog.title}</h1>
                    <p>{blog.created_on}</p>
                    <p>{blog.blog}</p>
                    <p>Adam Reed</p>
                </div>
            </div>  
            <Footer />
        </div>
        
       
    )

}

export default SingleBlogTemplate;