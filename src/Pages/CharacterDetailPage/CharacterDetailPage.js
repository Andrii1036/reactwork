import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

import style from './CharacterDetailPage.module.css'

import {charactersService} from "../../services/characters.service";

const CharacterDetailPage = () => {

    let {id} = useParams();

    let {state} = useLocation();

    let [details, setDetails] = useState(null)

    let {image, name, gender, species, status} = {...details}

    let navigate = useNavigate()

    const marker = useRef()

    useEffect(() => {

        if (state) {
            setDetails(state)
        } else {
            charactersService.getById(id)
                .then(value => setDetails(value))
        }
        marker.current.scrollIntoView()
    }, [])

    return (
        <>
            <div ref={marker}></div>
            {
                details &&
                <div id={'detailsWrapper'} className={style.detailsWrapper}>
                    <h2>{name}</h2>
                    <div className={style.descriptionContainer}>
                        <div>
                            <img src={image} alt=""/>
                        </div>
                        <div className={style.description}>
                            <p>Gender:{gender}</p>
                            <p>Species:{species}</p>
                            <p>Status:{status}</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consequatur eaque enim
                        illo maiores pariatur repellendus voluptas. Ab adipisci cupiditate debitis dolor dolore facere
                        harum id illo impedit incidunt ipsam, iusto magnam mollitia odio perspiciatis provident quidem
                        similique veritatis. Ab amet asperiores commodi dicta dignissimos earum expedita iure libero
                        minima, mollitia, officia quia quod saepe similique soluta tempora vel. Deleniti dolores eos est
                        hic labore nemo pariatur qui, quo unde voluptate! Asperiores culpa ipsa repudiandae vero!
                        Adipisci aspernatur at beatae cupiditate eaque eum eveniet fugit hic id ipsum iste, laboriosam
                        maiores mollitia nisi obcaecati odio quaerat repellendus sequi unde.</p>
                    {state && <button onClick={() => {
                        navigate(-1)
                    }}>На попередню сторінку</button>}
                </div>

            }
        </>
    )
}
export {CharacterDetailPage};