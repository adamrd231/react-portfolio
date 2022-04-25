import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../api-service';

function Blogs() {

    const MAX_LENGTH = 1000;
    const [ blogLoaded, SetBlogLoaded ] = useState(false);

    useEffect(() => {
        API.getBlogs().then( blogs => { SetBlogLoaded(blogs) })
    },[])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    if (blogLoaded) {
        return (
            <div id="blogs" className="home-page-blogs">
                <div className="landing-text-container">
                    <h1 className="landing-title">Blogs</h1>
                    <div className="overall-blog-container">
                    {/* BLog layout, pagination or choosing how many to display */}

                        { blogLoaded && blogLoaded.map( blog => {
        
                            let newDate = formatDate(blog.created_on)
        
                            return (
                                <div key={blog.id} className="blog-post clickable">
                                    <Link to={{
                                        pathname: "/blogs/" + blog.slug,
                                        state: {
                                            blog: blog
                                        }
                                     }}>
                                        <div className="blog-container">
                                            <p className="blog-date">{newDate}</p>
                                            <p className="blog-title">{blog.title}</p>
                                        </div>
                                    
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