import React from 'react';

const Form = ({onSubmit,formValue,setFormValue}) => {

    const formChange=(e)=>{
        setFormValue({...formValue,[e.target.name]:e.target.value})
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Name:<input type='text' name={'name'} value={formValue.name} onChange={formChange}/></label>
            <label>Username:<input type='text' name={'username'} value={formValue.username} onChange={formChange}/></label>
            <label>Email:<input type='text' name={'email'} value={formValue.email} onChange={formChange}/></label>
            <button>Find User</button>
        </form>
    );
};

export default Form;