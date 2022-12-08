import React from 'react';
import { Link } from 'react-router-dom';

const Goldfish = () => {
    return (
        <div className='Goldfish'>
            <h1>The gold standard of snacks</h1>
            <img src="https://media4.giphy.com/media/4Z0cK0yuWHW4Y1I7xo/200w.webp?cid=ecf05e472ytjtgwwznedy7btca9m3mecsn556jrmu2k930ud&rid=200w.webp&ct=g" />
            <h1><Link to='/'>Go back!</Link></h1>
        </div>
    )
}

export default Goldfish;