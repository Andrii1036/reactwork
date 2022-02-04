import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Item.module.css'

const Item = ({data}) => {

    let {title} = data
    let {name} = data

    return (
        <div className={style.item}>
            {title&& <NavLink to={`/posts/${data.id}`} state={data}><p>{title}</p></NavLink>}
            {name && <NavLink to={`/users/${data.id}`} state={data}><p>{name}</p></NavLink>}
        </div>
    );
};

export default Item;