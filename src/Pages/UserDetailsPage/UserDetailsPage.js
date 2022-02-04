import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, Link} from "react-router-dom";

import style from './UserDetaiPage.module.css'

import {userService} from "../../services/user.service";
import DetailsButton from "../../Components/DetailsButton/DetailsButton";

const UserDetailsPage = () => {

    let {id} = useParams();
    let {state} = useLocation();

    let [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state)
        } else {
            userService.getById(id)
                .then(value => setUser(value))
        }
    }, [state, id])

    return (
        <>
            {user &&
                <div className={style.userDetail}>
                    <div className={style.card}>
                        <h1>{user.name}</h1>
                        <h3>{user.username}</h3>
                        <p>mail: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                        <p>phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                        <div className={style.address}>
                            <div>Address:</div>
                            <div>
                                <p>city:{user.address.city}</p>
                                <p>street:{user.address.street}</p>
                                <p>suite:{user.address.suite}</p>
                            </div>
                        </div>
                        <div>
                            <Link to={`/users/${id}/posts`}><DetailsButton message={'All posts of this user'}/></Link>
                        </div>
                    </div>

                    <div>
                        <Outlet/>
                    </div>

                </div>
            }
        </>
    );
};

export default UserDetailsPage;