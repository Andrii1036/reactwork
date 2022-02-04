import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import style from './PostsOfUserPage.module.css'

import {postService} from "../../services/post.service";
import ItemOfPostsOfUserPage from "../../Components/ItemOfPostsOfUserPage/ItemOfPostsOfUserPage";

const PostOfUserPage = () => {

    let{id}=useParams()
    let[posts,setPosts]=useState([])

    useEffect(()=>{
        postService.getByUser(id)
            .then(value => setPosts([...value]))
    },[id])
    return (
        <>
            {posts&&
                <div className={style.posts}>
                    {posts.map(post=><ItemOfPostsOfUserPage key={post.id} post={post}/>)}
                </div>
            }
        </>

    );
};

export default PostOfUserPage;