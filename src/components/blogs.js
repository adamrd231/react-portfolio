import React from 'react';

function Blogs(props) {
    return (
        <div className="blog-container">
        <h1>Blogs</h1>

        { props.blogs && props.blogs.map( blog => {
            return (
                <div key={blog.id} className="blog-post">
                    <h2>{blog.title}</h2>
                    <p>{blog.created_on}</p>
                    <p>{blog.blog}</p>
                    <p>Adam Reed</p>
                </div>
            )
        })}
    </div>
    )
  
}

export default Blogs;