import React from 'react';
import {Link} from "react-router-dom";

import style from './CharacterItem.module.css'

const CharacterItem = ({data}) => {

    let name = data.name.split(' ').join('');


    const showInfo = (e) => {
        let item = document.getElementById(`${name}`);
        item.style.display='block'
        let parent = document.getElementById('contant')
        let rect=parent.getBoundingClientRect()

        if(e.pageX>rect.left+323){
            item.style.right='100%'
        }
        if(e.pageX<rect.left+323){
            item.style.left='+100%'
        }
    }

    const closeInfo=()=>{
        let item = document.getElementById(`${name}`);
        item.style.display='none'

    }
    return (
        <div className={style.characterItem} >
            <Link to={`/${name}/${data.id}`} state={data} onMouseEnter={showInfo} onMouseLeave={closeInfo}>
                <p>{data.name}</p>
                <img src={data.image} alt=""/>
            </Link>
            <div id={name} className={style.popUp}>
                <h2>{data.name}</h2>
                <p>eaque earum et fugit in incidunt, itaque labore laborum laceat quaerat quibusdam quos repellendus tempora tenetur vel vero, voluptatum. At, explicabo unde. Accusantium aperiam commodi consequuntur culpa cumque distinctio eos est eveniet excepturi hic mollitia nobis optio, possimus provident quod repudiandae sit! Aliquam asperiores, autem consectetur, consequatur consequuntur cum dolore dolorem ea eaque enim hic ipsam iure labore, magnam nam natus nulla numquam odio officiis pariatur quaerat quidem quis quod rem repudiandae saepe similique sunt suscipit tempora vitae voluptates?</p>
            </div>
        </div>
    );
};

export {CharacterItem};