import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div>
            <h1>Please choose your favorite snack</h1>
            <p><Link to='/coke'>Coke</Link></p>
            <p><Link to='/cookies'>Cookies</Link></p>
            <p><Link to='/goldfish'>Goldfish</Link></p>
            <img src='https://media0.giphy.com/media/bDS3ycLNK08UhgAiI3/giphy.gif?cid=ecf05e47dhoszay7y3atnar08u9l7hkbaykhbncgo7hbccn0&rid=giphy.gif&ct=g' />
        </div>
    )
}

export default VendingMachine;