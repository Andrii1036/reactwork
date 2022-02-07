import React from 'react';
import {Link} from "react-router-dom";

import style from './Header.module.css'

const Header = () => {
    return (
        <nav className={style.navigation}>
            <Link to={'/'}><p>Епізоди</p></Link>
            <Link to={'/character'}><p>Персонажі</p></Link>

            <p>комикси</p>
            <p>обои</p>
            <p>магазин</p>
            <p>контакти</p>

        </nav>
    );
};

export {Header};