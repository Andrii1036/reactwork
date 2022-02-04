import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import style from './UsersPage.module.css'

import {userService} from "../../services/user.service";
import Item from "../../Components/Item/Item";

const UsersPage = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers([...value]))
    }, []);

    return (
        <div className={style.container}>
            <div className={style.items}>
                {users.map(user => <Item key={user.id} data={user}/>)}
            </div>
            <div className={style.detail}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;