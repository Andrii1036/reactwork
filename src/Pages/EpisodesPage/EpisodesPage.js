import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import style from '../../Style/page.module.css'

import {episodesService} from "../../services/episodes.service";
import {EpisodsItem, PageItem, PrevNextNavigation} from "../../Components";

const EpisodesPage = () => {

    let [episodes, setEpisodes] = useState([]);
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

        episodesService.getEpisodesByPageNumber(page)
            .then(value => {
                setMaxPageCount(value.info.pages)
                setEpisodes([...value.results])
            })
    }, [page])

    return (
        <div className={style.contantWrapper}>
            <PrevNextNavigation maxpageCount={maxPageCount}
                                pageCount={pageCount}
                                setPageCount={setPageCount}
                                setSearchParams={setSearchParams}
            />
            <h2>Епізоди</h2>
            <div id={'contant'} className={style.contant}>
                {episodes.map(item => <PageItem key={item.id} data={item}/>)}
            </div>

            <PrevNextNavigation maxpageCount={maxPageCount}
                                pageCount={pageCount}
                                setPageCount={setPageCount}
                                setSearchParams={setSearchParams}
            />
        </div>
    );
};

export {EpisodesPage};