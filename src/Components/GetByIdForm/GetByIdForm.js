import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './GetByIdForm.css'

import {carsService} from "../../services/cars.service";
import idValidator from "../Validators/getById.validator";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

let errorMassage='Авто з вказаним ID не знайдено';

const GetByIdForm = ({getId}) => {

    const[error,setError]=useState(false);

    const{register,handleSubmit,formState:{errors}}=useForm({resolver:joiResolver(idValidator),mode:'onChange'});

    const getById=(e)=>{
        carsService.getById(e.id)
            .then(value => {
                getId(value)
                setError(false)
            })
            .catch(error=>{
                if(error.response.status===404){
                    setError(true)
                }
            })
    };

    return (
        <div>
            <form className={'getByIdForm'} onSubmit={handleSubmit(getById)}>
                <label>Car`s id:<input type={'number'} {...register('id')}/></label>
                {errors.id&&<ErrorMessage error={errors.id?.message}/>}
                <button>Get by ID</button>
                {error&&<ErrorMessage error={errorMassage}/>}
            </form>

        </div>
    );
};

export default GetByIdForm;