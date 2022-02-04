import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import style from './PostsPage.module.css'

import {postService} from "../../services/post.service";
import Item from "../../Components/Item/Item";

const PostsPage = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(value => setPosts([...value]))
    }, []);

    return (
        <div className={style.container}>
            <div className={style.items}>
                {posts.map(post => <Item key={post.id} data={post}/>)}
            </div>
            <div className={style.details}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;