import React from 'react';

import style from './PrevNextNavigation.module.css'

const PrevNextNavigation = ({pageCount, setPageCount, setSearchParams, maxpageCount}) => {

    const nextPage = () => {
        pageCount = ++pageCount
        if (pageCount > maxpageCount) {
            pageCount = maxpageCount
        }
        setPageCount(pageCount)
        setSearchParams(`page=${pageCount}`)
    }
    const prevPage = () => {
        pageCount = --pageCount
        if (pageCount < 1) {
            pageCount = 1
        }
        setPageCount(pageCount)
        setSearchParams(`page=${pageCount}`)
    }

    return (
        <div className={style.prevNextNavigation}>
            <button onClick={prevPage}>Попередня сторінка</button>
            <button onClick={nextPage}>Наступна сторінка</button>
        </div>
    );
};

export {PrevNextNavigation};