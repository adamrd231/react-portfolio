import React from 'react';

function Blogs(props) {

    const blogClicked = blog => evt => {
        props.blogClicked(blog);
    }

    return (

    <div id="blogs" className="home-page-blogs">

        <div className="overall-blog-container">
            {/* BLog layout, pagination or choosing how many to display */}
            <div className="blogs-container">
            { props.blogs && props.blogs.map( blog => {
                return (
                    <div key={blog.id} className="blog-post clickable" onClick={blogClicked(blog)}>
                        <h2>{blog.title}</h2>
                        <p>{blog.created_on}</p>
                        <p dangerouslySetInnerHTML = {{ __html: blog.blog }}></p>
                        <p>Adam Reed</p>
                    </div>
                    
                )
           
            })}
            </div>

            {/* BLog menu */}
            <div className="blog-menu" >
                <p><strong>Recent Blogs</strong></p><hr></hr>
                { props.blogs && props.blogs.map( blog => {
                    return (
                        <p className="clickable blog-menu-items" onClick={blogClicked(blog)}>{blog.title}</p>
                    )
                })}
            </div>
        </div>
    </div>

    )
  
}

export default Blogs;