import React, { Component, useState, useEffect } from 'react';
import Menu from './menu';
import Footer from './footer';
// Import React SummerNote modules
// import RichTextEditor from './summernote';


function SingleBlogTemplate(props) {

    

    const blog = props.blog;
    const blogs = props.blogs;

    useEffect(() => {
        window.scrollTo(0, 0);
     
    }, []);

    return (
        <div className="App">
            <Menu /> 
            <div className="single-page-blog">
                
                <div className="single-page-blog-container">
                    <h1>{blog.title}</h1>
                    <p>{blog.created_on}</p>
                    {/* <RichTextEditor>{blog.blog}</RichTextEditor> */}
                     <span dangerouslySetInnerHTML = {{ __html: blog.blog }}></span>
                    <span>Adam Reed</span>
                </div>
            </div>  
            <Footer />
        </div>
        
       
    )

}

export default SingleBlogTemplate;