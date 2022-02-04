import React from 'react';
import {NavLink} from "react-router-dom";

import style from './MainNavigator.module.css'

const MainNavigation = () => {
    return (
        <nav className={style.mainNavigator}>
            <NavLink to={'/posts'}>POSTS</NavLink>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={`/users`}>USERS</NavLink>
        </nav>
    );
};

export default MainNavigation;