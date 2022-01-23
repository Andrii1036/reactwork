import React from 'react';

import './User.css'

const User = ({user, getUser}) => {
    return (
        <div className={'userList_item'}>
            {user.name}
            <button onClick={() => getUser(user)}>Details</button>
        </div>
    );
};

export default User;