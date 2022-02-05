import React from 'react';

const UpdateButton = ({updateImage, endpoint}) => {
    return (
        <button onClick={() => {
            updateImage(endpoint)
        }}>
            Update
        </button>
    );
};

export {UpdateButton};