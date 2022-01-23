import React from 'react';

import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;