import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
    return (
        <div className='Cookies'>
            <h1>Rawr I'm a Cookie Monster</h1>
            <img src='https://media3.giphy.com/media/xT0xeMA62E1XIlup68/200w.webp?cid=ecf05e477im09uqjgb93b95pokhxboyu2ln8toclk92zns8k&rid=200w.webp&ct=g' />
            <h1><Link to='/'>Go back!</Link></h1>
        </div>
    )
}

export default Cookies;