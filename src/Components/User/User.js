import React from 'react';

const User = ({user}) => {
    let{id,name,username,email}=user
    return (
        <li>
            {id} Name:{name} Username:{username} Email:{email}
        </li>
    );
};

export default User;