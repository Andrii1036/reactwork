import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import style from './CommentsOfPostPage.module.css'

import {commentService} from "../../services/commentService";
import ItemOfCommentsOfPostPage from "../../Components/ItemOfCommentsOfPostPage/ItemOfCommentsOfPostPage";

const CommentsOfPostPage = () => {

    let{id}=useParams()
    let[comments,setComments]=useState([])

    useEffect(()=>{
        commentService.getByPost(id)
            .then(value => setComments([...value]))
    },[id])

    return (
        <>
            {comments&&
                <div className={style.comments}>
                    {comments.map(comment=><ItemOfCommentsOfPostPage key={comment.id} comment={comment}/>)}
                </div>
            }
        </>


    );
};

export default CommentsOfPostPage;