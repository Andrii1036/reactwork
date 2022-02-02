import React, {useState} from 'react';

import './App.css'

import Cars from "./Components/Cars/Cars";
import Form from "./Components/Form/Form";
import Sort from "./Components/Sort/Sort";
import GetByIdForm from "./Components/GetByIdForm/GetByIdForm";
import CarById from "./Components/CarById/CarById";


const App = () => {

    let [rerender, setRerender] = useState(null);
    let [sort, setSort] = useState('ascending');
    let [carById, setCarById] = useState(null)

    const newRender = (data) => {
        setRerender(data)
    };

    const onChange = (e) => {
        setSort(e.target.value)
    };

    const getId = (carId) => {
        setCarById(carId)
    }

    return (
        <div className={'wrapper'}>
            <header>useForm Bonus</header>
            <div className={'container'}>
                <div className={'forms'}>
                    <Sort onChange={onChange}/>
                    <Form rerender={newRender}/>
                    <GetByIdForm getId={getId}/>
                </div>
                {!carById && <Cars rerender={rerender} rerenderFunction={newRender} sort={sort}/>}
                {carById && <CarById car={carById} back={setCarById}/>}
            </div>
            <footer>Footer</footer>
        </div>
    );
};

export default App;