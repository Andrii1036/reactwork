import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import "./CarById.css"

import {carsService} from "../../services/cars.service";
import CarValidator from "../Validators/car.validator";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CarById = ({car: {id, model, year, price}, back}) => {

    const {
            register, handleSubmit, formState: {errors}
        } = useForm({resolver: joiResolver(CarValidator), mode: 'onChange'});

    const submit = (data) => {
        carsService.updateById(id, data)
            .then(() => {
                const card = document.getElementById('card')
                card.classList.add('active')
            })
    };

    return (
        <div className={'card'}>
            <form id={'card'} className={'carById'} onSubmit={handleSubmit(submit)}>
                <h2>ID:{id}</h2>
                <label>Model:<input type={'text'} defaultValue={`${model}`} {...register('model')}/></label>
                {errors.model && <ErrorMessage error={errors.model?.message}/>}
                <label>Price:<input type={'text'} defaultValue={`${price}`} {...register('price')}/></label>
                {errors.price && <ErrorMessage error={errors.price?.message}/>}
                <label>Year:<input type={'number'} defaultValue={`${year}`} {...register('year')}/></label>
                {errors.year && <ErrorMessage error={errors.year?.message}/>}
                <button>Update Car</button>
            </form>
            <button onClick={() => back(null)}>Назад</button>
        </div>
    );
};

export default CarById;