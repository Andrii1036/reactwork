import React from 'react';

import style from './DetailsButton.module.css'

const DetailsButton = ({message}) => {
    return (
        <button className={style.button}>
            {message}
        </button>
    );
};

export default DetailsButton;