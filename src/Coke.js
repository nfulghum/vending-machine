import React from 'react';
import { Link } from 'react-router-dom';

const Coke = () => {
    return (
        <div className='Coke'>
            <h1>So tasty</h1>
            <img src='https://giphy.com/embed/v2YxCO2pwHjji' />
            <h1><Link to='/'>Go back!</Link></h1>
        </div>
    )
}

export default Coke;