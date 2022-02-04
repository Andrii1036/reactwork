import React from 'react';

import style from './ItemOfPhotos.module.css'

const ItemOfPhotos = ({photo: {title, thumbnailUrl}}) => {

    return (
        <div className={style.photo}>
            <p>{title}</p>
            <img src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default ItemOfPhotos;