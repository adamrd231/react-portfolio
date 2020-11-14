import React from 'react';
import { Link } from 'react-router-dom';

function Blogs(props) {

    const MAX_LENGTH = 1000;

    return (

    <div id="blogs" className="home-page-blogs">
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
                                <h2>{blog.title}</h2>
                                
                                <p>{newDate}</p>
                                <p className="blog-text" dangerouslySetInnerHTML = {{ __html: blog.blog.substring(0, MAX_LENGTH) + "..." }}></p>
                                <strong><p>Click to Read More</p></strong>
                                <p className="blog-author">Adam Reed</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>

    )
  
}

export default Blogs;