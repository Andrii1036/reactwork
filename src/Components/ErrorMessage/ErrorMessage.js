import React from 'react';

import "./ErrorMasage.css"

const ErrorMessage = ({error}) => {
    return (
        <span className={'error'}>
            {error}
        </span>
    );
};

export default ErrorMessage;