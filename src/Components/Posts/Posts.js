import React from 'react';
import './Posts.css';
import PostsItem from "../PostsItem/PostsItem";

const Posts = ({posts}) => {
    return(
        <div className={'posts'}>
            {posts.map((post) => <PostsItem post={post} key={post.id}/>)}
        </div>

    );
};



export default Posts;

