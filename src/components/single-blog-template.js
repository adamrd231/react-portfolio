import React, { useEffect } from 'react';
import Menu from './menus/menu';
import Footer from './Home/footer';
// Import React SummerNote modules
// import RichTextEditor from './summernote';
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

function SingleBlogTemplate(props) {

    const blog = props.location.state;
    console.log(blog)

    

    useEffect(() => {
        window.scrollTo(0, 0);
     
    }, []);

    let createdOn = formatDate(blog.blog.created_on)


    return (
        <div className="single-page-blog-container App">
            <Menu /> 
            <div className="single-blog-container">
                
                <div className="single-page-blog">
                    <h1>{blog.blog.title}</h1>
                    <p>{createdOn}</p>
                    <p className="blog-text" dangerouslySetInnerHTML = {{ __html: blog.blog.blog }}></p>
                    
                </div>  
            </div>
            <Footer />
        </div>
        
       
    )

}

export default SingleBlogTemplate;