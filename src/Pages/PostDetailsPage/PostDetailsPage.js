import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, Link} from "react-router-dom";

import style from './PostDetail.module.css'

import {postService} from "../../services/post.service";
import DetailsButton from "../../Components/DetailsButton/DetailsButton";

const PostDetailsPage = () => {

    let {id} = useParams();
    let {state} = useLocation();
    let [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
        } else {
            postService.getById(id)
                .then(value => setPost(value))
        }
    }, [state, id])

    return (
        <>
            {post &&
                <div className={style.detail}>
                    <div className={style.card}>
                        <h1>{post.title}</h1>
                        <h3>user ID:{post.userId}</h3>
                        <p>{post.body}</p>
                        <div>
                            <Link to={`/posts/${id}/comments`}><DetailsButton message={'comments of this post'}/></Link>
                        </div>
                    </div>

                    <div>
                        <Outlet/>
                    </div>
                </div>
            }
        </>
    );
};

export default PostDetailsPage;