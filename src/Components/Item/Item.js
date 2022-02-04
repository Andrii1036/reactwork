import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Item.module.css'

import UsersLinkButton from "../UsersLinkButton/UsersLinkButton";

const Item = ({data}) => {

    let {title} = data
    let {name} = data

    return (
        <div className={style.item}>
            {title &&
                <div className={style.post}>
                    <NavLink to={`/posts/${data.id}`} state={data}><p>{title}</p></NavLink>
                </div>
            }

            {name &&
                <div className={style.user}>
                    <p>{name}</p>
                    <div>
                        {
                            <NavLink to={`/users/${data.id}`} state={data}>
                                <UsersLinkButton message={'User Details'}/>
                            </NavLink>
                        }
                        {
                            <NavLink to={`/users/${data.id}/albums`}>
                                <UsersLinkButton message={'User Albums'}/>
                            </NavLink>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Item;