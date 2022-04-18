import React from 'react';
import profile from '../../images/about/profile.jpg';

const About = () => {
    return (
        <div className=' p-5'>
            <img className='w-50 rounded-pill border border-5 mx-auto d-block m-5' src={profile} alt="" />
            <h2 className='text-center'>Md. Nafish Sadik</h2>
            <p className='text-center'>Since my university days, I've had a strong interest in computers and programming.
                My ambition is to become an excellent web developer who can create professional and
                useful web applications with business value. I'm seeking for a junior software developer
                employment at a reputable software firm that will assist me in achieving my objective.
            </p>
        </div>
    );
};

export default About;