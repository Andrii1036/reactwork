import React from 'react';

import './UserDetails.css'

const UserDetails = ({user, getUserPost}) => {
    return (
        <div className={'userDetails'}>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p><a href={`tel:${user.phone}`}>{user.phone}</a></p>
            <button onClick={() => getUserPost(user.id)}>Posts</button>
        </div>
    );
};

export default UserDetails;