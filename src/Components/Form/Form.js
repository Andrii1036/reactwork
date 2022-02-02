import React from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import './Form.css'

import {carsService} from "../../services/cars.service";
import CarValidator from "../Validators/car.validator";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = ({rerender}) => {

    const {
        register, handleSubmit,formState:{errors}
    } = useForm({resolver:joiResolver(CarValidator),mode:'onChange'});

    const submit = (data) => {
        carsService.create(data)
            .then(value => rerender(value))
    };

    return (
        <div >
            <form className={'saveForm'} onSubmit={handleSubmit(submit)}>
                <label>Model:<input type={'text'} defaultValue={''} {...register('model')}/></label>
                {errors.model&&<ErrorMessage error={errors.model?.message}/>}
                <label>Price:<input type={'text'} defaultValue={''} {...register('price')}/></label>
                {errors.price&&<ErrorMessage error={errors.price?.message}/>}
                <label>Year:<input type={'number'} defaultValue={''} {...register('year')}/></label>
                {errors.year&&<ErrorMessage error={errors.year?.message}/>}
                <button>Save New Car</button>
            </form>
        </div>
    );
};

export default Form;