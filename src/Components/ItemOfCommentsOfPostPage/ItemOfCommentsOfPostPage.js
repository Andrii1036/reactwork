import React from 'react';

const ItemOfCommentsOfPostPage = ({comment: {name, email, body}}) => {
    return (
        <div>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <h3>{name}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default ItemOfCommentsOfPostPage;