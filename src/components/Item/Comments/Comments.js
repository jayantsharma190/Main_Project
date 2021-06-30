import React from 'react';
import './Comments.css';

function Comments({comment}) {
    return (
        <div className="comments">
            <div className="comment-name">{comment.commentName}<label className="comment-date1">{comment.enter_on}</label></div>
            <div className="comment-content">{comment.commentValue}</div>
            {/* <div className="comment-reply">Show Replies</div> */}
        </div>
    )
}

export default Comments
