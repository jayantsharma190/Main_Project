import React from 'react';
import './Blogs.css';

function Blogs() {
    return (
        <div className="blog">
            <div className="blog_left_area">
                <img src="#" alt="blog image"/>
            </div>
            <div className="blog_right_area">
                <div className="blog_right_header">
                    <h2>About Blog</h2>                    
                </div>
                <div className="blog_right_body">
                    <h5>Content lines here</h5>
                </div>
                <div className="blog_right_writer">
                    <h4>By ABC</h4>
                </div>
            </div>
        </div>
    )
}

export default Blogs
