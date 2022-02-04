import React from 'react';

import style from './Header.module.css'

import MainNavigation from "../MainNavigation/MainNavigation";

const Header = () => {
    return (
        <header className={style.header}>
            <MainNavigation/>
        </header>
    );
};

export default Header;