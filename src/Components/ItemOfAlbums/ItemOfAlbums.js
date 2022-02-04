import React from 'react';
import {Link, useParams} from "react-router-dom";

import style from './ItemOfAlbums.module.css'

const ItemOfAlbums = ({album: {id, title}}) => {

    let {id: userId} = useParams()

    return (
        <div className={style.albumItem}>
            <Link to={`/users/${userId}/albums/${id}/photos`}>
                <p>ID:{id}</p>
                <p>{title}</p>
                <hr/>
            </Link>
        </div>
    );
};

export default ItemOfAlbums;