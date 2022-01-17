import React from "react";
import './CommentsItem.css';

const CommentsItem=({comment})=>{
    return(
        <div className={'comment'}>
            <h2>
                {comment.name}
            </h2>
            <p>
                {comment.body}
            </p>
        </div>
    );
};

export default CommentsItem;