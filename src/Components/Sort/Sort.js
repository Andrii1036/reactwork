import React from 'react';
import {useForm} from "react-hook-form";

import './Sort.css'

const Sort = ({onChange}) => {

    const {
        register
    } = useForm();

    return (
        <div>
            <form className={'sort'} onChange={onChange}>
                <label>Sort id(ascending)<input type="radio" {...register('sort')} value={'ascending'}/></label>
                <label>Sort id(descending)<input type="radio" {...register('sort')} value={'descending'}/></label>
            </form>
        </div>
    );
};

export default Sort;