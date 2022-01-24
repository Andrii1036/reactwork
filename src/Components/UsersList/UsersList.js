import React from 'react';

import User from "../User/User";

const UsersList = ({users}) => {

    return (
        <ul>
            {users.map(item=><User user={item} key={item.id}/>)}
        </ul>
    );
};

export default UsersList;