import React from "react";
import './UsersItem.css';

const UsersItem=({user})=>{
    return(
        <div className={'user'}>
            <h2>
                {user.name}
            </h2>
            <p>
                phone:{user.phone}
            </p>
            <p>
                email:{user.email}
            </p>
        </div>
    );
};

export default UsersItem;