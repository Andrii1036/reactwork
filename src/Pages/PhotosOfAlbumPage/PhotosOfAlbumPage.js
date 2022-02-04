import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import style from './PhotosOfAlbumPage.module.css'

import {albumsService} from "../../services/albums.service";
import ItemOfPhotos from "../../Components/ItemOfPhotos/ItemOfPhotos";

const PhotosOfAlbumPage = () => {

    let {albumId} = useParams()
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getPhotoByAlbymId(albumId)
            .then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div className={style.photos}>
            {photos.map(photo => <ItemOfPhotos key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotosOfAlbumPage;