import React, {useEffect, useState} from "react";

import './App.css'

import UsersList from "./components/UsersList/UsersList";
import getAll from "./service/user.service";
import UserDetails from "./components/UserDetails/UserDetails";
import getPosts from './service/posts.service'
import Posts from "./components/Posts/Posts";


const App = () => {

    let [users, setUsers] = useState([]);
    let [userDetails, setUserDetails] = useState(null);
    let [posts, setPosts] = useState(null)

    const getUserDetails = (user) => {
        setUserDetails(user)
    }

    const getUserPosts = (id) => {
        getPosts(id)
            .then(value => setPosts(value))
    }

    useEffect(() => {
        getAll()
            .then(value => setUsers(value))
    }, []);

    return (
        <div className={'container'}>
            <UsersList users={users} getUser={getUserDetails}/>
            {userDetails && <UserDetails user={userDetails} getUserPost={getUserPosts}/>}
            {posts && <Posts posts={posts}/>}
        </div>
    );
};

export default App;