import React, { useState, useEffect } from 'react';
import Menu from './menu';
import Footer from './footer';
import { Link } from 'react-router-dom';


function BlogsMenu() {

    // Create state for blogs
    const [blogs, setBlogs] = useState([]);
    const MAX_LENGTH = 1000;
    
    useEffect( () => {
        fetch("http://127.0.0.1:8000/projects/blog/", {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
        }
    })
    .then(response => response.json())
    .then(response => setBlogs(response))
    
    }, [])

    return (
        <div className="App">
            <Menu />
            <div className="blogs-template-home">
                <h1>Blogs Page</h1>
                <hr></hr>
                { blogs && blogs.map( blog => {
                    return (
                        
                        <div>
                            <Link to={{
                                pathname: "/blogs/" + blog.slug,
                                state: {
                                    blog: blog
                                }
                             }}>
                            <h2>{blog.title}</h2>
                            <p>{blog.created_on}</p>
                            <p className="blog-text" dangerouslySetInnerHTML = {{ __html: blog.blog.substring(0, MAX_LENGTH) + "..." }}></p>
                            <strong><p>Click to Read More</p></strong>
                            </Link>
                        </div>
                    )
                })}
                
            </div>
            <Footer />
        </div>
        
    )
}

export default BlogsMenu;