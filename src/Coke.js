import React from 'react';
import { Link } from 'react-router-dom';

const Coke = () => {
    return (
        <div className='Coke'>
            <h1>So tasty</h1>
            <img src='https://media1.giphy.com/media/hQKiGV6MG8WmsHg2yx/giphy.webp?cid=ecf05e47q7gymbh2z6c7urn2xb9x90vih8hiagbh85gfq76f&rid=giphy.webp&ct=g' />
            <h1><Link to='/'>Go back!</Link></h1>
        </div>
    )
}

export default Coke;