import React from 'react';

import style from './ImageViewport.module.css'

const ImageViewport = ({url}) => {
    return (
        <div className={style.imageViewport}>
            <img src={url} alt={url}/>
        </div>
    );
};

export {ImageViewport};