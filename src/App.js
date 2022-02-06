import React, {useEffect} from 'react';

import "./App.css"

import {Content, Copyright, Header} from "./Components";



const App = () => {



    return (
        <div className={'wrapper'}>
            <Copyright/>
            <div className={"container"}>
                <Header/>
                <Content/>
            </div>

        </div>
    );
};

export default App;