import React from 'react';
import {Routes, Route} from "react-router-dom";

import style from './MainContent.module.css'

import HomePage from "../../Pages/HomePage/HomePage";
import PostsPage from "../../Pages/PostsPage/PostsPage";
import UsersPage from "../../Pages/UsersPage/UsersPage";
import PostDetailsPage from "../../Pages/PostDetailsPage/PostDetailsPage";
import UserDetailsPage from "../../Pages/UserDetailsPage/UserDetailsPage";
import CommentsOfPostPage from "../../Pages/CommentsOfPostPage/CommentsOfPostPage";
import PostOfUserPage from "../../Pages/PostsOfUserPage/PostOfUserPage";
import UserAlbumsPage from "../../Pages/UserAlbumsPage/UserAlbumsPage";
import PhotosOfAlbumPage from "../../Pages/PhotosOfAlbumPage/PhotosOfAlbumPage";

const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={'/posts:id'} element={<PostDetailsPage/>}>
                        <Route path={'/posts/:id/comments'} element={<CommentsOfPostPage/>}/>
                    </Route>
                </Route>
                <Route path={'/users'} element={<UsersPage/>}>
                    <Route path={'/users/:id/albums'} element={<UserAlbumsPage/>}>
                        <Route path={'/users/:id/albums/:albumId/photos'} element={<PhotosOfAlbumPage/>}/>
                    </Route>
                    <Route path={'/users:id'} element={<UserDetailsPage/>}>
                        <Route path={'/users/:id/posts'} element={<PostOfUserPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainContent;