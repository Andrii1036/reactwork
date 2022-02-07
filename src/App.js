import React from 'react';

import "./App.css"

import {Content, Copyright, Footer, Header} from "./Components";



const App = () => {


    return (
        <div className={'wrapper'}>
            <Copyright/>
            <div className={"container"}>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        </div>
    );
};

export default App;