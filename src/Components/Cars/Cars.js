import React, {useEffect, useState} from 'react';

import "./Cars.css"

import Car from "../Car/Car";
import {carsService} from "../../services/cars.service";


const Cars = ({rerender,rerenderFunction,sort}) => {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(value =>{
            if(sort==='ascending'){
                setCars([...value].sort((a,b)=>a.id-b.id))
            }
            if(sort==='descending'){
                setCars([...value].sort((a,b)=>b.id-a.id))
            }
        })
    }, [rerender,sort]);

    if(cars.length===0){
        return (
            <div className={'cars'}>
                <h2>Автомобілів нема!!!</h2>
            </div>
        );
    }else {
        return (
            <div className={'cars'}>
                {cars.map(car=><Car key={car.id} car={car} rerender={rerenderFunction}/>)}
            </div>
        );
    }
};

export default Cars;