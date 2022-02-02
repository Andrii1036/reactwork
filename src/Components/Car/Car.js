import React from 'react';

import'./Car.css';

import {carsService} from "../../services/cars.service";

const Car = ({car:{id,model,price,year},rerender}) => {

    const deleteCar=()=>{
        carsService.deleteById(id)
            .then(value => rerender(value))
    };

    return (
        <div className={'car'}>
            <h2>ID:{id}</h2>
            <h2>Model:{model}</h2>
            <p>Year:{year}</p>
            <p>Price:{price}$</p>
            <button onClick={deleteCar}>Delete car</button>
        </div>
    );
};

export default Car;