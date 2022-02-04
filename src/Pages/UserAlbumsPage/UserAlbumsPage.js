import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import style from './UserAlbumsPage.module.css'

import {albumsService} from "../../services/albums.service";
import ItemOfAlbums from "../../Components/ItemOfAlbums/ItemOfAlbums";

const UserAlbumsPage = () => {

    let {id} = useParams()
    let [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsService.getByUserId(id)
            .then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={style.albumsWrapper}>
            <div className={style.albums}>
                {albums.map(album => <ItemOfAlbums key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserAlbumsPage;