import React from 'react';

import style from './CartoonItem.module.css'

const CartoonsItem = ({item}) => {

    return (
        <div className={style.img}>
            <a href="https://cn-fan.tv" target={'_blank'}>
                <img
                    src={`https://github.com/Andrii1036/reactwork/blob/additional_task_Rick_Morty/src/images/aside/${item}.jpg?raw=true`}
                    alt=""/>
            </a>
        </div>
    );
};

export {CartoonsItem};