import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import style from './CharacterPage.module.css'

import {charactersService} from "../../services/characters.service";
import {CharacterItem, PrevNextNavigation} from "../../Components";

const CharacterPage = () => {

    let [character, setCharacter] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    let [pageCount, setPageCount] = useState(1);
    let [maxPageCount, setMaxPageCount] = useState(0);

    let page = searchParams.get('page');

    useEffect(() => {
        if (page === null) {
            page = 1
        }

        setPageCount(+page)

        if (pageCount > maxPageCount) {
            pageCount = maxPageCount
        }

        charactersService.getPageByNumber(page)
            .then(value => {
                setMaxPageCount(value.info.pages)
                setCharacter([...value.results])
            })
    }, [page])

    return (
        <div className={style.contantWrapper}>

            <PrevNextNavigation maxpageCount={maxPageCount}
                                pageCount={pageCount}
                                setPageCount={setPageCount}
                                setSearchParams={setSearchParams}
            />

            <h2>Персонажі</h2>
            <div id={'contant'} className={style.contant}>
                {character.map(item => <CharacterItem key={item.id} data={item}/>)}
            </div>

            <PrevNextNavigation maxpageCount={maxPageCount}
                                pageCount={pageCount}
                                setPageCount={setPageCount}
                                setSearchParams={setSearchParams}
            />
        </div>
    );
};

export {CharacterPage};