import React from 'react';
import Blogs from './Blogs';
import './BlogsCollection.css';

function BlogsCollection() {


    let blogs_collection = [1,2,3,4,5];

    return (
        <div className="blogs_collection">
            {
                blogs_collection.map((blogs,index)=>{
                  return  <Blogs key={index} className="{index%2 ? 'box_left_style':'box_right_style'}"/>
                })
            }
        </div>
    )
}

export default BlogsCollection;
