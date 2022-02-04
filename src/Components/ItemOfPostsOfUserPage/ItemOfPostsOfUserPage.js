import React from 'react';

const ItemOfPostsOfUserPage = ({post: {title, body}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default ItemOfPostsOfUserPage;