import React from 'react';

import style from './Header.module.css'

const Header = () => {
    return (
        <nav className={style.navigation}>
            <p>сезони</p>
            <p>персонажи</p>
            <p>комикси</p>
            <p>обои</p>
            <p>магазин</p>
            <p>сезони</p>
            <p>контакти</p>

        </nav>
    );
};

export {Header};