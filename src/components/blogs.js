import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../api-service';

function Blogs() {

    const MAX_LENGTH = 1000;
    const [ blogLoaded, SetBlogLoaded ] = useState(false);

    useEffect(() => {
        API.getBlogs().then( blogs => { SetBlogLoaded(blogs) })
    },[])

    if (blogLoaded) {
        return (
            <div id="blogs" className="home-page-blogs">
                <h1 className="portfolio-title">Blogs</h1>
                <div className="overall-blog-container">
                    {/* BLog layout, pagination or choosing how many to display */}
                    <div className="blogs-container">
                        { blogLoaded && blogLoaded.map( blog => {
        
                            let newDate = Date((blog.created_on) )
        
                            return (
                                <div key={blog.id} className="blog-post clickable">
                                    <Link to={{
                                        pathname: "/blogs/" + blog.slug,
                                        state: {
                                            blog: blog
                                        }
                                     }}>
                                         <div className="lineBreak"></div>
                                        <h2>{blog.title}</h2>
                                        <div className="lineBreak"></div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        
            )
    } else {
        return (
            <div id="blogs" className="home-page-blogs">
                <p className="loading-graphic">Loading Blogs...</p>
            </div>
        )
        
    }
    
  
}

export default Blogs;