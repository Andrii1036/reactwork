import React, {useEffect, useState} from 'react';

const CartoonsItem = ({item}) => {

    let[img,setImg]=useState('')

    useEffect(()=>{
        fetch(`../src/images/aside/${item}.jpg`)
            .then(value => console.log(value))
            // .then(value => console.log(value))
    },[])

    return (
        <div>
            <img src={img} alt={item}/>
        </div>
    );
};

export {CartoonsItem};