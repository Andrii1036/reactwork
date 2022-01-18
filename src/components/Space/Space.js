import React from 'react';
import './Space.css';

const Space=({data})=>{
console.log(data)
    return(
        <div className={'space'}>
            <div className={'space_title'}>
                <h2>{data.mission_name}</h2>
                <p>{data.launch_year}</p>
            </div>
            <div className={'space_image'}>
                <img src={data.links.mission_patch_small} alt="rocket"/>
            </div>
        </div>
    );
};

export default Space;