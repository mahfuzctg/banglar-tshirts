import React from 'react';
import './tShirt.css';
const Tshirt = ({tshirt}) => {
   const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <button>Buy now</button>
        </div>
    );
};

export default Tshirt;