import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
    return (
        <div className='Cookies'>
            <h1>Rawr I'm a Cookie Monster</h1>
            <img src='https://giphy.com/embed/59Ve1fnBdol8c' />
            <h1><Link to='/'>Go back!</Link></h1>
        </div>
    )
}

export default Cookies;