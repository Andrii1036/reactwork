import React from 'react';
import './Users.css';
import UsersItem from "../UsersItem/UsersItem";

const Users =({users})=>{
    return(
        <div className={'users'}>
            {users.map(user=><UsersItem user={user} key={user.id}/>)}
        </div>
    );
}

export default Users;