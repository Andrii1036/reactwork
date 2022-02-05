import React from 'react';

const EndpointButton = ({title, endpoint, setEndpoint}) => {
    return (
        <button onClick={() => {
            setEndpoint(endpoint)
        }}>
            {title}
        </button>
    );
};

export {EndpointButton};