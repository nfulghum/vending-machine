import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div>
            <h1>Please choose your favorite snack</h1>
            <p><Link to='/coke'>Coke</Link></p>
            <p><Link to='/cookies'>Cookies</Link></p>
            <p><Link to='/goldfish'>Goldfish</Link></p>
        </div>
    )
}

export default VendingMachine;