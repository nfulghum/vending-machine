import React from 'react';
import { Link } from 'react-router-dom';

const Goldfish = () => {
    return (
        <div className='Goldfish'>
            <h1>The gold standard of snacks</h1>
            <img src="https://giphy.com/embed/l2RKXrl6ofyDRdNd2u" />
            <h1><Link to='/'>Go back!</Link></h1>
        </div>
    )
}

export default Goldfish;