import React from 'react';
import notfound from '../../../images/404/notfound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='my-5'>
            <img className='w-25 mx-auto d-block vibrate-1' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;