import React from 'react';

import './Buttons.css'

const Buttons = ({dispatch,field}) => {

    const click=(type)=>{
        dispatch({
            field:field,
            type:type
        })
    }

    return (
        <div className={'buttons'}>
            <button onClick={()=>{click('inc')}}>INC</button>
            <button onClick={()=>{click('dec')}}>DEC</button>
            <button onClick={()=>{click('res')}}>RES</button>
        </div>
    );
};

export default Buttons;