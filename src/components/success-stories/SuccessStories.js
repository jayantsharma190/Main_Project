import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import "./SuccessStories.css";

    function SuccessStories()
    {

    return (
        <>
            <div className="success_stories">
                {/* <div className="success_stories_header">
                    <h2>Our Success Stories</h2>
                </div> */}
                <div className="success_stories_container">
                    <div className="story_content">
                        <p>Image</p>
                        <p>Some Lines</p>
                        <p>Some content other</p>
                    </div>
                    
                    <div className="story_content">
                        <p>Image</p>
                        <p>Some Lines</p>
                        <p>Some content other</p>
                    </div>
                    <div className="story_content">
                        <p>Image</p>
                        <p>Some Lines</p>
                        <p>Some content other</p>
                    </div>
                </div>
            </div>
        </>
    )
 }

export default SuccessStories;
