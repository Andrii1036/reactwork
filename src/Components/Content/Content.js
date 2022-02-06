import React from 'react';

import style from './Content.module.css'

import {CartoonsItem} from "../CartoonsItem/CartoonsItem";
import cartoonItems from "../../config/cartoonsItem";

const Content = () => {

    return (
        <div className={style.content}>
            <aside className={style.allCartoons}>
                {cartoonItems.map(item=><CartoonsItem key={item} item={item}/>)}
            </aside>

        </div>
    );
};

export {Content};