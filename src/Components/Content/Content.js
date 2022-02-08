import React from 'react';
import {Routes, Route} from "react-router-dom";

import style from './Content.module.css'

import {CartoonsItem} from "../CartoonsItem/CartoonsItem";
import cartoonItems from "../../config/cartoonsItem";
import {CharacterDetailPage, CharacterPage, EpisodDetailPage, EpisodesPage} from "../../Pages";


const Content = () => {

    return (
        <div className={style.content}>
            <div className={style.mainContent}>
                <Routes>
                    <Route path={'/'} element={<EpisodesPage/>}/>
                    <Route path={':episode'} element={<EpisodDetailPage/>}/>
                    <Route path={'character'} element={<CharacterPage/>}/>
                    <Route path={':name/:id'} element={<CharacterDetailPage/>}/>
                </Routes>

            </div>
            <aside className={style.allCartoons}>
                {cartoonItems.map(item => <CartoonsItem key={item} item={item}/>)}
            </aside>


        </div>
    );
};

export {Content};