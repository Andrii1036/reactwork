import React, {useEffect, useState} from 'react';
import './App.css';

import Posts from "./Components/Posts/Posts";
import Users from "./Components/Users/Users";
import Comments from "./Components/Comments/Comments";

const usersUrl ='https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'


const App = () => {

    let [users,setUsers]=useState([]);
    let [posts,setPosts]=useState([]);
    let [comments,setComments]=useState([]);

    useEffect(()=>{
        fetch(usersUrl)
            .then(value => value.json())
            .then(value => setUsers(value));
        fetch(postsUrl)
            .then(value => value.json())
            .then(value => setPosts(value));
        fetch(commentsUrl)
            .then(value=>value.json())
            .then(value=>setComments(value));
    },[]);

    return (
        <div className={'container'}>
            <Users users={users}/>
            <Posts posts={posts}/>
            <Comments comments={comments}/>
        </div>
    );
};



export default App;