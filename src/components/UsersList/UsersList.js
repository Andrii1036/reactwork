import React from 'react';

import './UserList.css'

import User from "../User/User";

const UsersList = ({users, getUser}) => {
    return (
        <div className={'usersList'}>
            {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
        </div>

    );
};

export default UsersList;