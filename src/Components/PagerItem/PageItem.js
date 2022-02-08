import React from 'react';
import {Link, useLocation} from "react-router-dom";

import style from './PageItem.module.css'

let imgURL = 'https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/rick-morty-ship-i35959.jpg'

const PageItem = ({data}) => {

    let name = data.name.split(' ').join('');
    let pathname = useLocation()

    const showInfo = (e) => {
        let item = document.getElementById(`${name}`);
        item.style.display = 'block'
        let parent = document.getElementById('contant')
        let rect = parent.getBoundingClientRect()

        if (pathname.pathname === '/') {
            item.style.top = '54px'
            item.style.height = '400px'
        }

        if (e.pageX > rect.left + 323) {
            item.style.right = '100%'
        }
        if (e.pageX < rect.left + 323) {
            item.style.left = '+100%'
        }
    }

    const closeInfo = () => {
        let item = document.getElementById(`${name}`);
        item.style.display = 'none'

    }
    return (
        <>
            {
                pathname.pathname === '/character' &&
                <div className={style.characterItem}>
                    <Link to={`/${name}/${data.id}`} state={data} onMouseEnter={showInfo}
                          onMouseLeave={closeInfo}>
                        <p>{data.name}</p>
                        <img src={data.image} alt=""/>
                    </Link>
                    <div id={name} className={style.popUp}>
                        <h2>{data.name}</h2>
                        <p>eaque earum et fugit in incidunt, itaque labore laborum laceat quaerat quibusdam
                            quos repellendus tempora tenetur vel vero, voluptatum. At, explicabo unde.
                            Accusantium aperiam commodi consequuntur culpa cumque distinctio eos est eveniet
                            excepturi hic mollitia nobis optio, possimus provident quod repudiandae sit!
                            Aliquam asperiores, autem consectetur, consequatur consequuntur cum dolore
                            dolorem ea eaque enim hic ipsam iure labore, magnam nam natus nulla numquam odio
                            officiis pariatur quaerat quidem quis quod rem repudiandae saepe similique sunt
                            suscipit tempora vitae voluptates?</p>
                    </div>
                </div>
            }

            {
                pathname.pathname === '/' &&
                <div className={style.episodesItem}>
                    <Link to={`/${data.episode}`} onMouseEnter={showInfo} onMouseLeave={closeInfo}>
                        <div>
                            <h2>{data.name}</h2>
                            <p>{data.episode}</p>
                            <img src={imgURL} alt="rickAndMorty"/>
                            <p>{data.air_date}</p>
                        </div>
                    </Link>

                    <div id={name} className={style.popUp}>
                        <h2>{data.name}</h2>
                        <p>eaque earum et fugit in incidunt, itaque labore laborum laceat quaerat quibusdam
                            quos repellendus tempora tenetur vel vero, voluptatum. At, explicabo unde.
                            Accusantium aperiam commodi consequuntur culpa cumque distinctio eos est eveniet
                            excepturi hic mollitia nobis optio, possimus provident quod repudiandae sit!
                            Aliquam asperiores, autem consectetur, consequatur consequuntur cum dolore
                            dolorem ea eaque enim hic ipsam iure labore, magnam nam natus nulla numquam odio
                            officiis pariatur quaerat quidem quis quod rem repudiandae saepe similique sunt
                            suscipit tempora vitae voluptates?</p>
                    </div>
                </div>

            }

        </>

    );
};

export {PageItem};