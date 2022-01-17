import React  from "react";
import './Comments.css';
import CommentsItem from "../CommentsItem/CommentsItem";

const Comments=({comments})=>{
    return(
        <div className={'comments'}>
            {comments.map(comment=><CommentsItem comment={comment} key={comment.id}/>)}
        </div>

    )
};

export default Comments;