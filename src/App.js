import React, {useEffect, useState} from 'react';

import style from './App.module.css'

import {imagesServices} from "./services/images.services";
import {EndpointButton, ImageViewport, UpdateButton} from "./Components";

const App = () => {

    let [image, setImage] = useState('');
    let [endpoint, setEndpoint] = useState('car');

    const updateImage = (endpoint) => {
        imagesServices.getImage(endpoint)
            .then(value => setImage(value))
    };

    useEffect(() => {
        imagesServices.getImage(endpoint)
            .then(value => setImage(value))
    }, [endpoint]);

    return (
        <div className={style.wrapper}>
            <div className={style.endpoints}>
                <EndpointButton title={'Car'} setEndpoint={setEndpoint} endpoint={'car'}/>
                <EndpointButton title={'Cat'} setEndpoint={setEndpoint} endpoint={'cat'}/>
                <EndpointButton title={'Dog'} setEndpoint={setEndpoint} endpoint={'dog'}/>
                <EndpointButton title={'Girl'} setEndpoint={setEndpoint} endpoint={'girl'}/>
                <EndpointButton title={'Notebook'} setEndpoint={setEndpoint} endpoint={'notebook'}/>
            </div>
            <div className={style.image}>
                <ImageViewport url={image}/>
                <UpdateButton updateImage={updateImage} endpoint={endpoint}/>
            </div>
        </div>
    );
};

export default App;