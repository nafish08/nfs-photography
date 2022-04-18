import React from 'react';
import profile from '../../images/about/profile.jpg';

const About = () => {
    return (
        <div className=' p-5'>
            <img className='w-50 rounded-pill border border-5 mx-auto d-block m-5' src={profile} alt="" />
            <h2 className='text-center'>Md. Nafish Sadik</h2>
            <p className='text-center'>I've had a keen interest in computers and programming since my undergraduate days.
                My objective is to become a skilled web developer capable of producing professional and helpful online apps
                with commercial value. I'm looking for a junior software developer position at a reputable software company
                that will help me achieve my goal.
            </p>
            <p className='text-center fw-bold text-secondary'>
                I'll learn new frameworks and stay up to speed on new features so that I can keep up with the latest trends.
                I intend to work diligently to improve my abilities.
            </p>
        </div>
    );
};

export default About;