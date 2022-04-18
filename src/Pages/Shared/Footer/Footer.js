import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='row py-3 ps-4'>
                <div className="col">
                    <p className='text-light text-left mb-0'>Copyright &copy; || NFS Photography<br />
                        <small className='text-secondary'>All photos are subject to copyright and may not be used without written
                            consent from NFS Photography.</small>
                    </p>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <p className='text-light text-center pt-3 text-uppercase'>Privacy Policy</p>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <p className='text-light text-center pt-3 text-uppercase'>Terms and Conditions</p>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <p className='text-light text-center pt-3 text-uppercase'>Cancellation Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;