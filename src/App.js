import React from 'react';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";

const App = () => {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
};

export default App;