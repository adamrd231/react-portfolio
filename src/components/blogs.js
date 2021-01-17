import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blogs(props) {

    const MAX_LENGTH = 1000;
    const [ blogLoaded, SetBlogLoaded ] = useState(false);

    useEffect(() => {
        if (props.blogs) {
            SetBlogLoaded(true)
        } else {
            SetBlogLoaded(false)
        }
    },[props.blogs, SetBlogLoaded, blogLoaded])

    if (blogLoaded) {
        return (
            <div id="blogs" className="home-page-blogs">
                <p>Latest News</p>
                <div className="overall-blog-container">
                    {/* BLog layout, pagination or choosing how many to display */}
                    <div className="blogs-container">
                        { props.blogs && props.blogs.map( blog => {
        
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