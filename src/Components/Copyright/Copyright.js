import React from 'react';

import style from './Copyright.module.css'

const Copyright = () => {
    return (
        <div className={style.copyright}>
             <span>Original design from</span> <a href="https://rickandmorty.cn-fan.tv/" target={'blank'}>https://rickandmorty.cn-fan.tv/</a>
        </div>
    );
};

export {Copyright};